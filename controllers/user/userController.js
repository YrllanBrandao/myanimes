const Logged = require("../../public/_javascript/logged");
const GEN_TOKEN = require("../../recovery/genToken");
const user = require("./user");
const Token = require("../../recovery/tableToken");
const jwt = require("jsonwebtoken");
const jwtDecoded = require("jwt-decode");
// const sendMail = require("../../recovery/sendEmail");
const nodemailer = require("nodemailer");

class User{
    async perfil(req, res)
    {
        const id =  req.session.user;

        user.findByPk(id).then(user =>{
            const source = user.profilePictureUrl;
            res.render("user/profile.ejs",{
                user,
                profileUrl:  source,
                logged: true
            })
        })
       
    }
    async recoveryIndex(req, res)
    {

        const profile = await  Logged(req);
        res.render("./user/recovery.ejs",{
            logged: profile.logged,
        })
    }
    async genToken(req, res)
    {
        const {email} = req.body;
    
        const USER = await user.findOne({
            where:{
                email
            }
        });


        if(USER === undefined || USER === null)
        {
            res.json({
                status: 404,
                message: "Conta não encontrada, verifique se digitou corretamente ou <a href='/register' class='text-dark text-underline fs-6 fw-bold'>Crie uma conta</a>"
            })
        }

        // gen payload and send email
        const generatedToken = GEN_TOKEN();
        
    

       await Token.create({
            used: false,
            token: generatedToken,
            email
        })

       jwt.sign(
        {

            email,
            token: generatedToken
        },
        generatedToken,
        {
            expiresIn: '24h'
        }, ((error, token) =>{
          
            
             // create reusable transporter object using the default SMTP transport
             const transport = nodemailer.createTransport({
                host: "smtp.office365.com",
                port: 587,
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASSWORD
                }
              });

              // verify connection configuration
              const message = {
                from: "yrllanbrandao@outlook.com",
                to: email,
                subject: "ALTERAÇÃO DE SENHA",
                html: `
                <!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Transactional Email</title>
    <style>
@media only screen and (max-width: 620px) {
  table.body h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
  }

  table.body p,
table.body ul,
table.body ol,
table.body td,
table.body span,
table.body a {
    font-size: 16px !important;
  }

  table.body .wrapper,
table.body .article {
    padding: 10px !important;
  }

  table.body .content {
    padding: 0 !important;
  }

  table.body .container {
    padding: 0 !important;
    width: 100% !important;
  }

  table.body .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
  }

  table.body .btn table {
    width: 100% !important;
  }

  table.body .btn a {
    width: 100% !important;
  }

  table.body .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
  }

  #MessageViewBody a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  .btn-primary table td:hover {
    background-color: #34495e !important;
  }

  .btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
  }
}
</style>
  </head>
  <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
          <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">olá!!</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Você solicitou a mudança de senha em nosso site, para realizar a mudança clique no botão abaixo</p>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #000;" valign="top" align="center" bgcolor="#4e31aa"> <a href="http://localhost:8080/recovery-account/${token}" target="_blank" style="border: solid 1px #4e31aa; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #4e31aa; border-color: #4e31aa; color: #ffffff;">Redefinir senha</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"><b>caso não tenha  solicitado a troca de senha, apenas ignore este e-mail.</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Obrigado por usar nosso serviço.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
            
                <tr>
                  <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                    Powered by <a href="http://yrllanbrandao.me" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">Yrllan Brandão</a>.
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>

            ` }
  
            //   sending email

            transport.sendMail(message, ()=>{
                console.log("<===Enviado===>")
            });

            res.json({
                status: 200,
                message: "Sucesso, nós enviamos um email com um link para redefinicação de senha"
            })
 
        })
       );

     
    }

    async changePassByToken(req, res)
    {
        const profile = Logged(req)
        const tokenJWT = req.params.token;
        const payload = jwtDecoded(tokenJWT)

        
        await Token.findOne({
            where:{
                email: payload.email
            }
        }).then(table =>{
            if(table !== null && table !== undefined)
        {
           if(table.used === 1)
           {
            res.send("TOKEN INVÁLIDO -  <a href='/recovery-password' class='text-black fs-6 fw-bold'>SOLICITE UM NOVO</a>")
           }
           else{
            table.update({
                used: true
            })
            // gen autorization token
            const tokenAuth = jwt.sign({
                email: payload.email
            },process.env.JWT_SECRET);

            res.render("./user/changePassword.ejs",{
                email: payload.email,
                accessToken: tokenAuth,
                logged: profile.logged
            });
           }
        }
        })
        
    }

    async changePasswordRecovery(req, res)
    {
        const {email, password} = req.body;
        const authToken = req.headers['authorization'];

        if(authToken !== undefined)
        {
            const bearer = authToken.split(' ');
            const token = bearer[1];

            const verified = jwt.verify(token, process.env.JWT_SECRET);


            
        }
        else{
            res.json({
                status: 401,
                message: "UNAUTHORIZED!"
            })
        }
    }
 
}

module.exports = new User();