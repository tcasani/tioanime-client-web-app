import functions from "./functions";
const {capitalize, no_undefined} = functions;
export default function data(q) {
    var datos = {
        user: {
            id: q.id_usuario,
            gender: no_undefined(q.genero, 'Oculto'),
            joined: no_undefined(q.joined, 'Oculto'),
            animes: {
                Watching: no_undefined(q.viendo, 'Ninguno'),
                Completed: no_undefined(q.vistos, 'Ninguno'),
                On_Hold: no_undefined(q.espera, 'Ninguno'),
                Dropped: no_undefined(q.dropped, 'Ninguno'),
                Plan_to_Watch: no_undefined(q.planeado, 'Ninguno'),
                Rewatched: no_undefined(q.revistos, 'Ninguno'),
                Episodes: no_undefined(q.episodes, 'Ninguno')
            },
            mangas: {
                Reading: no_undefined(q.leyendo, 'Ninguno'),
                Completed: no_undefined(q.leidos, 'Ninguno'),
                On_Hold: no_undefined(q.esperaMan, 'Ninguno'),
                Dropped: no_undefined(q.droppedMan, 'Ninguno'),
                Plan_to_Read: no_undefined(q.planeadoMan, 'Ninguno'),
                Reread: no_undefined(q.releidos, 'Ninguno'),
                Chapters: no_undefined(q.chapters, 'Ninguno'),
                Volumes: no_undefined(q.volumes, 'Ninguno')
            }
        },
    
        page_config: {
            comments: no_undefined(q.comments, 'Activados'),
            theme: no_undefined(q.tema, 'Oscuro')
        }
    };
    return datos;
};