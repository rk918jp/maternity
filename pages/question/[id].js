import { useRouter } from 'next/router';
import {
  getFirestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';

// firebaseApps previously initialized using initializeApp()
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);
export default function Question({ query }) {
  console.log(query);
  return <h1>{query}</h1>;
}

export async function getServerSideProps({ query }) {
  const [snapshot, loading, error] = useCollectionOnce(
    query,
    options
  );
  return {
    props: { query },
  };
}
// import { useState } from 'react';
// import DefaultLayout from '../../components/layout/DefaultLayout';
// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     `http://localhost:8000/question/${params.id} `
//   );
//   const question = await res.json();

//   return {
//     props: {
//       questions: question,
//     },
//   };
// }

// export async function getQuestionIds() {
//   const questions = await fetch(
//     'http://localhost:8000/question'
//   ).then((res) => res.json());

//   return questions.map((question) => {
//     return {
//       params: {
//         id: question.id.toString(),
//       },
//     };
//   });
// }

// export async function getStaticPaths() {
//   const paths = await getQuestionIds();

//   return {
//     paths,
//     fallback: false,
//   };
// }
// export default function ItemCreate({ questions }) {
//   const [descText, setDescText] = useState(questions.answer);
//   const onChangeDescText = (event) => setDescText(event.target.value);

//   return (
//     <DefaultLayout>
//       <div>
//         <h1>質問詳細画面</h1>

//         <textarea
//           name="description"
//           cols={40}
//           rows={4}
//           value={descText}
//           onChange={onChangeDescText}
//         ></textarea>
//       </div>
//     </DefaultLayout>
//   );
// }
