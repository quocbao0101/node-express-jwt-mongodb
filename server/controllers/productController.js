import { CategoryGraphic } from "../models/card-man-hinh/categoryGraphic.js";
import { Product } from "../models/card-man-hinh/productModel.js";

const productController = {
    getProductPagination: async(req, res, next) => {
        const page = parseInt(req.body.page);
        const pageSize = parseInt(req.body.pageSize);
        const sortPrice = req.body.sort.price;
        const searchName = req.body.filter.name;
        const inPrice = req.body.sort.inPrice
        let number;
        console.log(inPrice);
        if(sortPrice === 'desc') {
            number = -1;
        } else number = 1;
            await Product.find(
                {
                    name: {'$regex': searchName, $options:'i'},
                    price: {
                        "$gte": inPrice[0],
                        "$lte": inPrice[1],
                    }
                })
                .select('')
                .limit(pageSize)
                .skip(pageSize * page)
                .sort({
                    price: number,
                })
                .exec(function(err, data) 
                {
                    if(err) { res.status(500).json(err); };
                    Product.count().exec(function(err, page) {
                        if(err) { res.status(500).json(err); };
                        res.status(200).json(
                        {
                            totalElements: data.length,
                            totalData: page,
                            totalPages: Math.round(page / pageSize),
                            sort: {
                                price: sortPrice === 'desc' ? 'desc' : 'asc',
                            },
                            data: data,
                        });
                    })
                })
    },
    getProduct: async(req, res) => {
        try {
            const product = await Product.find();
            res.status(200).json(product); 
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addProduct: async(req, res) => {
        try {
            const product = new Product(req.body);
            const saveProduct = await product.save();
            res.status(200).json(saveProduct); 
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getCategoryGraphic: async(req,res) => {
        try {
            const category = await CategoryGraphic.find();
            res.status(200).json(category); 
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


export default productController;