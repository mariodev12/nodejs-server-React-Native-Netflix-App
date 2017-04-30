import mongoose, {Schema} from 'mongoose'

var showSchema = new Schema(
    {
        id: Number,
        name: String,
        image: String,
        details: {
            genres: Array,
            year: String,
            description: String,
            cast: Array,
            episodes: Array
        }
    }
)

export default mongoose.model('shows', showSchema)