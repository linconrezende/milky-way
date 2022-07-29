const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({ name: 'string', 
                description: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string', 
                updatedBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Example = mongoose.model('examples', exampleSchema);

module.exports = {
    Example
}