import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Followup from "./components/Followup";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Followup />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        {/* <Billing /> */}
      </div>
    </div>
    <div
      className={`bg-primary ${styles.flexStart} ${styles.paddingX} sm:pr-0 pr-0`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
