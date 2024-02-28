import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transation) => (
          <tr className={css.tr} key={transation.id}>
            <td className={css.td}>{transation.type}</td>
            <td className={css.td}>{transation.amount}</td>
            <td className={css.td}>{transation.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
