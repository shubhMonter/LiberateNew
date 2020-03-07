const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      handle: {
        type: String,
        //required: true,
        max: 40
      },
      //// TEMP:
      sector:String,
      category:String,
      domain:String,
      job_role:String,
      skill:String,
      //// TEMP:
      intel_type: [  ],
      gender: { type: Number, max: 3, min: 0 },
      dob:Date,
      age: Number,
      mobile:Number,
      address:
      {
        street:String,
        postcode:Number,
        city:String,
        country:String
      },
      languages:[String],
      bio:String,
      martial_status:{ type: Number, max: 3, min: 0 },
      hobbies:[String],
      fieldstudy:String,
      experience: [
        {
          title: {
            type: String,
            //required: true
          },
          company: {
            type: String,
            //required: true
          },
          location: {
            type: String
          },
          from: {
            type: Date,
            //required: true
          },
          to: {
            type: Date
          },
          current: {
            type: Boolean,
            default: false
          },
          description: {
            type: String
          }
        }
      ],

      education:
      [
        {
          Qualification: {
            type: String,
            //required: true
          },
          Institute: {
            type: String,
            //required: true
          },
          grade:{
            type:String
          },
          from: {
            type: Date,
            //required: true
          },
          to: {
            type: Date
          },
          current: {
            type: Boolean,
            default: false
          },

        }
      ],
    skills: [{
          skillset:String,
          rating:Number
        }],
    extrovert:String,
    agreeable:String,
    conscientious:String,
    neurotic:String,
    open:String,
    leadership:String,
    moral:String,
    problem_sol:String,
    com_skill:String,
    iq:String,
      });


      module.exports = Profile = mongoose.model('profile',ProfileSchema);
