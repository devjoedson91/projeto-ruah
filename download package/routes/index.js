var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();
var contatos = require('./../inc/contatos');


/* GET home page. */
router.get('/', function(req, res, next) {

    conn.query(`
    
        SELECT * FROM tb_containers ORDER BY title
    
    `, (err, results) => {

        
        if (err) {

            console.log(err);

        } else {

            res.render('index', { 
              
              title: 'Comunidade Católica RUAH', 
              containers: results          
            
            });


        }

    });

});


// rota e renderização de contatos

router.get('/contatos', function(req, res, next) {

    contatos.render(req, res);

});


router.post('/contatos', function(req, res, next) {

    if (!req.body.name) {
      contatos.render(req, res, 'Digite o seu nome');
    } else if (!req.body.email) {
      contatos.render(req, res, 'Digite o seu email');
    } else if (!req.body.message) {
      contatos.render(req, res, 'Digite a messagem');
    } else {
      contatos.save(req.body).then(results => {
  
          req.body = {};
  
          contatos.render(req, res, null, 'Contato enviado com sucesso!');
  
      }).catch(err=> {
  
        contatos.render(req, res, err.message);
  
      })
    }
  
  });

// rota e renderização de espiritualidade

router.get('/espiritualidade', function(req, res, next) {

    res.render('espiritualidade', {

        title: 'Espiritualidade - Comunidade Católica RUAH'

    });

});

// rota e renderização de formações

router.get('/formacao', function(req, res, next) {

    res.render('formacao', {

        title: 'Formações - Comunidade Católica RUAH'

    });

});

// rota e renderização de formações

router.get('/historico', function(req, res, next) {

    res.render('historico', {

        title: 'Historico - Comunidade Católica RUAH'

    });

});

// rota onde estamos

router.get('/onde-estamos', function(req, res, next) {

    res.render('onde-estamos', {

        title: 'Onde Estamos - Comunidade Católica RUAH'

    });

});

// rota de cards

router.get('/cards', function(req, res, next) {

    res.render('cards', { 
              
        title: 'Cards - Comunidade Católica RUAH',
                          
    });

});

module.exports = router;
