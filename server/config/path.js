    // Users:
        // GET ALL USERS:
        /**
        * @swagger
        * /api/users:
        *   get:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - user-controller
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateUserInput'
        */


        // GET USER BY ID
        /**
        * @swagger
        * /api/users/{id}:
        *  get:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - user-controller
        *    parameters:
        *    - name: id
        *      in: path
        *      required: true
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateUserInput'
        */

        // ADD USER
        /**
        * @swagger
        * /api/users:
        *  post:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - user-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                   $ref: '#/components/schemas/CreateUserInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateUserInput'
        */

        // DELETE USER
                /**
        * @swagger
        * /api/users:
        *  delete:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - user-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                  $ref: '#/components/schemas/DeleteUserInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateUserInput'
        */


    // Category
        /**
        * @swagger
        * /api/category:
        *  get:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - category-controller
        *    responses:
        *      '200':
        *        description: OK
    */
           // ADD Category
        /**
        * @swagger
        * /api/category:
        *  post:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - category-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                   $ref: '#/components/schemas/CreateMenuInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateMenuInput'
        */
    // Menu
    /**
        * @swagger
        * /api/menu:
        *  get:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - menu-controller
        *    responses:
        *      '200':
        *        description: OK
    */
        // ADD MENU
        /**
        * @swagger
        * /api/menu:
        *  post:
        *    security: 
        *       - bearerAuth: []
        *    tags:
        *    - menu-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                   $ref: '#/components/schemas/CreateMenuInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateMenuInput'
        */
    // Auth

    /**
        * @swagger
        * /api/signin:
        *  post:
        *    tags:
        *    - authentication-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                   $ref: '#/components/schemas/SigninInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateUserInput'
    */

    /**
     * @swagger
     * /api/signup:
        *  post:
        *    tags:
        *    - authentication-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                   $ref: '#/components/schemas/CreateUserInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/CreateUserInput'
    */



    /**
     * @swagger
     * /api/products:
        *  post:
        *    tags:
        *    - products-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                   $ref: '#/components/schemas/ProductsInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/ProductsInput'
    */
   /**
    * @swagger
    * /api/products/pagination:
    *   post:
        *    tags:
        *    - products-controller
        *    requestBody:
        *       required: true
        *       content:
        *           application/json:
        *               schema:
        *                   $ref: '#/components/schemas/PaginationInput'
        *    responses:
        *      '200':
        *        description: OK
        *        content:
        *           application/json:
        *             schema:
        *              $ref: '#/components/schemas/ProductsInput'     
    */

   /**
    * @swagger
    * /api/products:
    *   get:
    *    tags:
    *    - products-controller  
    *    responses:
    *      '200':
    *        description: OK
    *        content:
    *           application/json:
    *             schema:
    *              $ref: '#/components/schemas/ProductsInput'     
    */
   