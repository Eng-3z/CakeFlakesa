import React, { useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {


    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return null;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                description: "",
                price: "",
                category: data.category
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p> إضافةصورة</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                </div>
                <div className='add-product-name flex-col'>
                    <p>إسم المنتج</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>وصف المنتج</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>تصنيف المنتج</p>
                        <select name='category' onChange={onChangeHandler} >
                            
                            <option value="المولود">المولود</option>
                            <option value="تخرج">تخرج</option>
                            <option value="كيكات دورين">كيكات دورين</option>
                            <option value="قبول | ترقية">قبول | ترقية</option>
                            <option value="عيد سعيد">عيد سعيد</option>
                            <option value="بوكس الإهداء">بوكس الإهداء</option>
                            <option value="انمي">انمي</option>
                            <option value="الميلاد">الميلاد</option>
                            <option value="شفاء | سفر">شفاء | سفر</option>
                            <option value="حب">حب</option>
                            <option value="زواج | خطوبة">زواج | خطوبة</option>
                            <option value="اكواب الكيك">اكواب الكيك</option>
                            <option value="المناسبات الخاصة">المناسبات الخاصة</option>
                            <option value="تصويركم">تصويركم</option>
                            <option value="آراء العملاء">آراء العملاء</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p> السعر</p>
                        <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='10' />
                    </div>
                </div>
                <button type='submit' className='add-btn' >إضافة</button>
            </form>
        </div>
    )
}

export default Add
