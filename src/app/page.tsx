export type UploadResult = {
    info: {
        public_id: string;
    };
    event: "success";
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <link rel="favicon" href="/public/logo.png" sizes="any" />
        </main>
    );
}
