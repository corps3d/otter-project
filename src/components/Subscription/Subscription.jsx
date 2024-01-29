import React, { useState } from "react";
import styles from "./Subscription.module.css";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

const Subscription = (props) => {
  const { display, margin,marginTop } = props;
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div
      className={`p-4 ${styles.planMain}`}
      style={{ display: display, marginLeft: margin }}
    >
      <h2 style={{ marginTop: marginTop }}>Choose Your Plan</h2>
      <div className={styles.switchMain}>
        <div className={styles.toggleItems}>Monthly</div>
        <div className={styles.toggleItems}>
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
              className={styles.checkbox}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.toggleItems}>Annually</div>
      </div>
      <div className={styles.priceMain}>
        <SubscriptionCard
          borderTop="#52cd92"
          title="Free"
          decscription="For individuals just getting started with Notta"
          price="0"
          seats="1 seat"
          minutes="120"
          buttonText="Current Plan"
          includeListHead="Includes:"
        />
        <SubscriptionCard
          borderTop="#fea643"
          title="Pro"
          decscription="For professionals who want more minutes and features"
          price="8.25"
          seats="1 seat"
          minutes="1800"
          buttonText="Get Pro Plan"
          includeListHead="Everything with Free Plan, plus:"
        />

        <SubscriptionCard
          borderTop="#208cff"
          title="Business"
          decscription="For teams that need collaboration and administration features "
          price="44"
          seats="2 seats"
          minutes="2400"
          buttonText="Get Business Plan"
          includeListHead="Everything with Pro, plus:"
        />

        <SubscriptionCard
          borderTop="#7f5fff"
          title="Enterprise"
          decscription="For organizations looking for advanced security, controls, and support"
          price="Custom"
          seats="Starting from 21 seats"
          minutes="Customized quota"
          buttonText="Contact Sales"
          includeListHead="Everything with Business, plus:"
        />
      </div>
      {/* <div className={styles.tableMain}>
        <h2 className="text-center">Plan Comparison</h2>
        <div className={styles.tableConatiner}>
          <table>
            <tr className={styles.mainTD}>
              <td></td>
              <td>
                <TableSubscriptionItem
                  title="Free"
                  decscription="For individuals just getting started with Notta"
                  buttonText="Current Plan"
                />
              </td>
              <td>
                <TableSubscriptionItem
                  title="Pro"
                  decscription="For professionals who want more minutes and features"
                  buttonText="Get Pro Plan"
                />
              </td>
              <td>
                <TableSubscriptionItem
                  title="Business"
                  decscription="For teams that need collaboration and administration features "
                  buttonText="Get Business Plan"
                />
              </td>
              <td>
                <TableSubscriptionItem
                  title="Enterprise"
                  decscription="For organizations looking for advanced security, controls, and support"
                  buttonText="Contact Sales"
                />
              </td>
            </tr>
            <tr>
              <th>Usage</th>
            </tr>
            <tr>
              <td>Transcription quota (no carryover)</td>
              <td>120 minutes/month</td>
              <td>1,800 minutes/month</td>
              <td>2,400 minutes/month</td>
              <td>Usage</td>
            </tr>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Subscription;
const TableSubscriptionItem = (props) => {
  const { title, decscription, buttonText } = props;
  return (
    <div className={styles.mainTablePlan}>
      <p className="text-center">{title}</p>
      <p className="text-center">{decscription}</p>
      <button className={styles.planButton}>{buttonText}</button>
    </div>
  );
};
