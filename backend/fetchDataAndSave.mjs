import fetch from 'node-fetch';
import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://ronitjena64:LmnCR48u0xHFl3nc@cluster0.jn7ivby.mongodb.net/';

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    category: String,
    sold: Boolean,
    image: String,
    dateOfSale: Date 
});

const Product = mongoose.model('Product', productSchema);

async function fetchDataAndSave() {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');

        const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = await response.json();

        // Map the dateOfSale string to a Date object
        const mappedData = data.map(item => ({
            ...item,
            dateOfSale: new Date(item.dateOfSale)
        }));

        await Product.insertMany(mappedData);
        console.log('Data inserted successfully');

        mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataAndSave();
