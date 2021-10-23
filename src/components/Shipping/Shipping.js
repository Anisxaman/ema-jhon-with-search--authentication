import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';

const Shipping = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const {user}=UseAuth();


    return (
        <div>
            <div >
                     <h1>Here you Shippied Product</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                
                <input {...register("nameRequired", { required: true })} />
                {errors.nameRequired && <span>This field is required</span>}
                
                <input type="submit" />
        </form>


            </div>


        </div>
    );
};

export default Shipping;