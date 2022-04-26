import React from 'react'
import { useRouter } from "next/router";
import Scripts from "../../components/scripts";
import TioAnime from '../../components/tioanime';
import AnimeTemplate from '../../components/pages/animepage';

export default function AnimePage() {
    const router = useRouter();
    const q = router.query;
    // var componenteAnimeTemplate = AnimeTemplate( undefined,3789);
    return (
        <>
            <TioAnime>
                {AnimeTemplate(42387,'tcasaniv')}
            </TioAnime>
            <Scripts>
                {/* <script>{'var mal_id=48590;'}</script> */}
                {/* <script src="/assets/js/getinfo.js"></script> */}
            </Scripts>
        </>
    )
}