import { useEffect, useState } from "react";
import { submitOrder } from "../../services/submitOrderService";
import Button from "../button-component/Button";
import Input from "../input-field/Input";
import styles from "./OrderForm.module.css";

const OrderForm = () => {
  const [order, setOrder] = useState({
    product__type: "",
    weight: "",
    vehicle__type: "",
    loading__location: "",
    unloading__loc: "",
    loading__date: "",
    petro_seller_co: "",
    loading__hour: "",
    description: "",
  });

  const orderInputChangeHandler = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const orderSubmitHandler = async () => {
    // do validation
    if (
      !order.product__type ||
      !order.description ||
      !order.loading__date ||
      !order.loading__hour ||
      !order.loading__location ||
      !order.petro_seller_co ||
      !order.unloading__loc ||
      !order.vehicle__type ||
      !order.weight
    ) {
      throw new Error("از کامل شدن فیلدهای فرم مطمئن شوید");
    }
    try {
      const { response } = await submitOrder(order);
      const data = response.json();
      // TODO: then we will show a respnse or message to the user but here i just user an alert as i have no access to the real api
      alert("سفارش با موفقیت ثبت شد");
      //
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className={`${styles.form}`} onSubmit={orderSubmitHandler}>
      <Input
        type="text"
        name="product__type"
        placeholder="نوع کالا"
        value={order.product__type}
        changeHandler={orderInputChangeHandler}
      />
      <Input
        type="number"
        name="weight"
        placeholder="وزن (کیلوگرم) "
        value={order.weight}
        changeHandler={orderInputChangeHandler}
      />
      <Input
        type="text"
        name="vehicle__type"
        placeholder="نوع ناوگان"
        value={order.vehicle__type}
        changeHandler={orderInputChangeHandler}
      />
      <Input
        type="text"
        name="loading__location"
        placeholder="محل بارگیری"
        value={order.loading__location}
        changeHandler={orderInputChangeHandler}
      />
      <Input
        type="text"
        name="unloading__loc"
        placeholder="محل تخلیه"
        value={order.unloading__loc}
        changeHandler={orderInputChangeHandler}
      />
      <Input
        type="text"
        name="loading__date"
        placeholder="تاریخ بارگیری"
        value={order.loading__date}
        changeHandler={orderInputChangeHandler}
      />
      <Input
        type="text"
        name="petro_seller_co"
        placeholder="نام اعلام کننده بار"
        value={order.petro_seller_co}
        changeHandler={orderInputChangeHandler}
      />
      <Input
        type="text"
        name="loading__hour"
        placeholder="ساعت بارگیری"
        value={order.loading__hour}
        changeHandler={orderInputChangeHandler}
      />
      <textarea
        name="description"
        cols={10}
        rows={5}
        placeholder="توضیحات"
        value={order.description}
        changeHandler={orderInputChangeHandler}
      ></textarea>
      <Button>تایید</Button>
    </form>
  );
};

export default OrderForm;
