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
   