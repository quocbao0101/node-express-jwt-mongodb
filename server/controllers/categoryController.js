import { Category } from "../models/categoryModel.js";

const categoryController = {
    getCategory: async(req, res) => {
        try {
            const menu = await Category.find();
            res.status(200).json({status: 'Success',data: menu});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addCategory: async(req, res) => {
        try {
            const menu = new Category(req.body);
            const saveMenu = await menu.save();
            res.status(200).json(saveMenu);  
        } catch (error) {
            
        }
    }
}


export default categoryController;