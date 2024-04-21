import React, { useState } from 'react';
import './AddProduct.css'; // Make sure this is correctly linked

const AddProduct = () => {
    const [productDetails, setProductDetails] = useState({
        productName: '',
        description: '',
        userName: '',
        phoneNumber: '',
        file: null
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === "file") {
            setProductDetails(prevDetails => ({ ...prevDetails, file: files[0] }));
        } else {
            setProductDetails(prevDetails => ({ ...prevDetails, [name]: value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Product Details:', {...productDetails});
        // Submit logic here
    };

    return (
        <div className="add-product-page">
            <form onSubmit={handleSubmit} className="order-summary">
                <div className="products-details">Product’s Details</div>
                
                <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" name="productName" value={productDetails.productName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="userName">Your Name:</label>
                    <input type="text" id="userName" name="userName" value={productDetails.userName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={productDetails.phoneNumber} pattern="([0-9]{3}-[0-9]{3}-[0-9]{4})" placeholder="05" onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={productDetails.description} onChange={handleChange} required />
                </div>

                <div className="form-group file-upload-base">
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <div className="icon-frame">
                            {/* Display an icon if you like */}
                        </div>
                        <div className="text-and-supporting-text">
                            <span className="text-1">Click to Upload Image</span>
                            <span className="text"> or Drag and Drop</span>
                            <span className="supporting-text"> (Max. File size: 25 MB)</span>
                        </div>
                    </label>
                    <input id="file-upload" type="file" name="file" onChange={handleChange} />
                </div>

                <button type="submit" className="btn">
                    Add a Product to GiveHub!
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
