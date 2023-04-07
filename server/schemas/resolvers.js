const { Project } = require('../models')

const resolvers = {
    Query: {
        projects: async () => {
            return Project.find().sort({createdAt: -1 })
        },

        project: async (parent, { projectId }) => {
            return Project.findOne({_id: projectId })
        },

    }, //end of Query

    Mutation: {
        addProject: async(parent, {projectText, }) => {
            return Project.create({ projectText })
        },
        addComment: async(parent, { projectId, commentText }) => {
            return Project.findOneAndUpdate(
                { _id: projectId },
                {
                    $addtoSet: {comments: { commentText } },
                },
                {
                    new: true,
                    runValidators: true,
                },
            );
            
        },
        removeProject: async (parent, { projectId} ) => {
            return Project.findOneAndDelete({ _id: thoughtId })
        },
        removeComment: async (parent, { projectId, commentId }) => {
            return Project.findOneAndDelete(
                { _id: projectId},
                { $pull: { comments: { _id: commentId} } },
                { new: true }
            );
        }
    } //end of Mutation
};

module.exports = resolvers;