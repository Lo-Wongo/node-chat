let messages = [];
let id = 0;

module.exports = {
  create: ( req, res ) => {
    const { message } = req.body;
    messages.push({ id, message });
    id++;
    res.status(200).send( messages );
  },

  read: ( req, res ) => {
    res.status(200).send( messages );
  },

  update: ( req, res ) => {
    const { message } = req.body;
    const updateID = req.params.id;

    messages[ updateID ] = {
      id: messages[ updateID ].id,
      message: message || messages[ updateID ].message
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