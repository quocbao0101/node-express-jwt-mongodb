import { Product } from "../models/productModel.js";

const productController = {
    getProduct: async(req, res, next) => {
        const page = parseInt(req.body.page);
        const pageSize = parseInt(req.body.pageSize);

            await Product.find().select('')
                .limit(pageSize)
                .skip(pageSize * page)
                .sort({
                    name: 'asc'
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
                            data: data,
                        });
                    })
                })
    },

    addProduct: async(req, res) => {
        try {
            const product = new Product(req.body);
            const saveProduct = await product.save();
            res.status(200).json(saveProduct); 
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


export default productController;