    /**
     * @swagger
     * components:
     *   schemas:
     *      CreateUserInput:
     *          type: object
     *          required:
     *              - email
     *              - username
     *              - password
     *              - name
     *              - gender
     *              - phone
     *          properties:
     *              email: 
     *                  type: string
     *              username:
     *                  type: string
     *              password:
     *                  type: string
     *              name:
     *                  type: string
     *              gender:
     *                  type: string
     *              phone:
     *                  type: string
     *              role: 
     *                  type: string
     */


    /**
     * @swagger
     * components:
     *  schemas:
     *      CreateMenuInput:
     *          required:
     *              - name
     *              - image
     *              - link
     *          properties:
     *              name:
     *                  type: string
     *              image:
     *                  type: string
     *              link: 
     *                  type: string
     */
    /**
     * @swagger
     * components:
     *  schemas:
     *      DeleteUserInput:
     *          type: array
     *          items:
     *              type: string
     */

    /**
     * @swagger
     * components:
     *  schemas:
     *      CreateRoleInput:
     *          required:
     *              - name
     *              - description
     *          properties:
     *              name:
     *                  type: string
     *              description:
     *                  type: string
     */

    /**
     * @swagger
     * components:
     *  schemas:
     *      SigninInput:
     *          required:
     *              - email
     *              - password
     *          properties:
     *              email:
     *                  type: string
     *              password:
     *                  type: string
     */

    /**
     * components:
     *   responses:
     *      UnauthorizedError:
     *       description: Access token is missing or invalid
     */


    /**
     * @swagger
     * components:
     *  schemas:
     *      PaginationInput:
     *          required: 
     *              - page
     *              - pageSize
     *              - inPrice
     *          properties:
     *              page:
     *                  type: number
     *              pageSize:
     *                  type: number
     *              filter:
     *                  type: object
     *                  items:
     *                  properties:
     *                      name:
     *                          type: string
     *              sort:
     *                  type: object
     *                  items:
     *                  properties:
     *                      price: 
     *                          type: string
     *                      inPrice:
     *                          type: array
     *                          items:
     *                              type: number
     */
    /**
     * @swagger
     * components:
     *  schemas:
     *      ProductsInput:
     *          required:
     *              - name
     *              - category
     *              - price
     *              - discount
     *              - qty
     *              - image
     *              - noti
     *              - contact
     *              - brand
     *              - memory
     *              - fan
     *              - color
     *          properties:
     *              name:
     *                  type: string
     *              category:
     *                  type: object
     *                  items:
     *                  properties:
     *                      name:
     *                          type: string
     *                      tag:
     *                          type: string
     *              price:
     *                  type: number
     *              discount: 
     *                  type: number
     *              qty:
     *                  type: number
     *              image: 
     *                  type: string
     *              noti:
     *                  type: string
     *              contact:
     *                  type: boolean
     *              brand:
     *                  type: string
     *              memory:
     *                  type: number
     *              fan:
     *                  type: number
     *              color:
     *                  type: string
     */


    /** 
     * @swagger
     * components:
     *  schemas:
     *      brandInput:
     *          required:
     *              - brand
     *              - gpu
     *              - memory
     *              - fan
     *              - colors
     *          properties:
     *              brand:
     *                  type: string
     */