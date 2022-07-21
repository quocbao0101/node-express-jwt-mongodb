    /**
     * @swagger
     * components:
     *   schemas:
     *      CreateUserInput:
     *          type:   object
     *          required:
     *              - username
     *              - password
     *              - name
     *              - gender
     *              - phone
     *          properties:
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
     *              - username
     *              - password
     *          properties:
     *              username:
     *                  type: string
     *              password:
     *                  type: string
     */