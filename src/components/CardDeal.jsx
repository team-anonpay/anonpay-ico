import { robot } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Debit Card to facilitate
        <br className="sm:block hidden" />
        the use of your Crypto in your daily life!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Enjoy the convenience of using a debit card connected to your Anon Pay
        account. Convert your digital assets into instant purchasing power,
        enabling simple and secure transactions anywhere. Simplify your
        financial life and have quick access to your crypto assets in your daily
        life whenever you need them.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>
  </section>
);

export default CardDeal;
