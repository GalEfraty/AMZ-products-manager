import { SadEmojiIcon } from '../svg';

function NotFoundPage() {
  return (
    <main className='page'>
      <div className='page-inner'>
        <h2 className='page-inner-title'>Page Not Found</h2>
        <p>Please Try again later, or never</p>
        <p>
          <SadEmojiIcon />
        </p>
      </div>
    </main>
  );
}

export default NotFoundPage;
