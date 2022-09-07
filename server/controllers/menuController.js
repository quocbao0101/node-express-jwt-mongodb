import { Menu } from "../models/menuModel.js";

const menuController = {
    getMenu: async(req, res) => {
        try {
            const menu = await Menu.find();
            res.status(200).json({status: 'Success',data: menu});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addMenu: async(req, res) => {
        try {
            const menu = new Menu(req.body);
            const saveMenu = await menu.save();
            res.status(200).json(saveMenu);  
        } catch (error) {
            
        }
    }
}


export default menuController;