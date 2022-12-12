
const institutesService = require('../services/institutes');

module.exports.getInstitutes = async (req, res) => {
    try{
        const institute = await institutesService.findAllInstitutes();
        res.send({institute});
    }catch(err){
        res.status(500);
        res.send({error: err});
    }
};

module.exports.postInstitute = async (req,res) => {
    const institutetInfo = {
        _id: req.body._id,  
        name: req.body.name,
        locationAdress:req.body.locationAdress,
        avaliableSpecializations: req.body.avaliableSpecializations,
        phoneNumber:req.body.phoneNumber
    };
    try{
        const createInstitute = await institutesService.addNewInstitute(institutetInfo);
        return res.status(201).send({
            msg:'Institute added successfully',
            InstitutetID : createInstitute._id
        });
    }catch(err){
        return res.status(500).send({error:err.message});
    }
};

module.exports.deleteInstitute = async (req, res) => {
    const InstitutetId = req.params.InstitutetID;
    try {
      await institutesService.deleteInstitute(InstitutetId);
      return res.send({
        msg: 'Institute deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };


  module.exports.getInstitute = async (req, res) => {
    const InstitutetId = req.params.InstitutetID;
    try {
      const institute = await institutesService.findInstituteById(InstitutetId);
      if (!institute) {
        return res.status(404).send({
          error: 'Institute not found.'
        });
      }
      return res.send({
        institute: institute
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };
  module.exports.updateInstitute = async (req, res) => {
    const institutetInfo = {
      _id: req.body._id,  
      name: req.body.name,
      locationAdress:req.body.locationAdress,
      avaliableSpecializations: req.body.avaliableSpecializations,
      phoneNumber:req.body.phoneNumber
  };
    try {
      let result = await institutesService.updateInstitute(institutetInfo);
      return res.send({
        msg: 'Institute updated successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };

  module.exports.Generateinstitute=async(req,res)=>{

    try{
      const InstitutetId = await institutesService.Generateinstitute();
      return res.send({ institute: InstitutetId }); 
    }
    catch(err){
      return res.status(500).send({
        error: err.message
    });
  }
};
