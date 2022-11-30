import QuestionList from '../../components/questionList';
import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
export default function Page() {
  return (
    <>
      <DefaultLayout>
        <Box textAlign="center">
          <h1>
            よくある質問
            <LiveHelpIcon fontSize="large" />
          </h1>
        </Box>
        <QuestionList />
        <Box textAlign="center"></Box>
      </DefaultLayout>
    </>
  );
}
