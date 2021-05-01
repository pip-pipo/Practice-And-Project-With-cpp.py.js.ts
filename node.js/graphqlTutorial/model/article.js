import mongoose from 'mongoose'

const articalSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true });

  const ArticalSchema = mongoose.model("ArticalSchema",articalSchema);

  export default ArticalSchema