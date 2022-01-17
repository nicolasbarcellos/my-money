import * as S from "./style";

export default function TransactionList({ transactions }) {
  return (
    <S.Container>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className="name">{transaction.name}</p>
          <p className="amount">${transaction.amount}</p>
        </li>
      ))}
    </S.Container>
  );
}
