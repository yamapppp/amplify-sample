'use client';

import { getSession, signIn, signOut } from 'next-auth/react';

export default async function Index() {
  const session = await getSession();
  console.log(session?.user?.email);
  return (
    <div>
      <button suppressHydrationWarning onClick={() => signIn()}>
        Sign in
      </button>
      <button suppressHydrationWarning onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
}
