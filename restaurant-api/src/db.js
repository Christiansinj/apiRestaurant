import mongoose from 'mongoose';

export default callBack => {
    let db = mongoose.connect;
    "mongodb://localhost27017/laginguette"
    callBack(db);
}