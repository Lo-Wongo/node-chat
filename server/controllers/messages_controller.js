let messages = [ { id: 1, text: 'Oh hey!', time: '06/15/2017 - 1:26 pm' },
                 { id: 0, text: 'Hey dude!', time: '06/15/2017 - 1:25 pm' }
               ];
let id = 2;

module.exports = {
  create: ( req, res ) => {
    console.log('Create hit:', req.body);
    const { text, time } = req.body;
    messages.unshift({ id, text, time });
    id++;
    res.status(200).send( messages );
  },

  read: ( req, res ) => {
    res.status(200).send( messages );
  },

  update: ( req, res ) => {
    const { text } = req.body;
    const updateID = req.params.id;

    messages[ updateID ] = {
      id: messages[ updateID ].id,
      text: text || messages[ updateID ].message,
      time: messages[ updateID ].time
    };

    res.status(200).send( messages );
  },

  delete: ( req, res ) => {
    const deleteID = req.params.id;    
    messageID = messages.findIndex( message => message.id == deleteID );
    messages.splice(messageID, 1);
    res.status(200).send( messages );
  }
};