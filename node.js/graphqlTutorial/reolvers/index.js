import ArticalSchema from '../model/article.js'


export default {

    articles:async ()=>{
        try{
            const articcle = await ArticalSchema.find();
            return articcle.map(article=>{
                return {
                    ...article._doc,
                    _id:article.id,
                    createdAt:new Date(article._doc.createdAt).toISOString(),

                }
            })
        }catch(err){
            throw err
        }
    },


    createArticle: async args => {
        try {
          const { title, body } = args.article
          const article = new ArticalSchema({
            title,
            body,
          })
          const newArticle = await article.save()
          return { ...newArticle._doc, _id: newArticle.id }
        } catch (error) {
          throw error
        }
      },





}