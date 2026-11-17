/**
 * Áudios narrados de cada bloco. A chave é a rota seguida de # e do id do
 * bloco (ou seu número, quando não houver id). Os arquivos ficam em public/audio.
 *
 * Exemplo: "/sobre#01": "/audio/sobre/01.mp3"
 * Enquanto não houver arquivo cadastrado, o botão usa a voz do navegador.
 */
export const sectionAudioSources: Record<string, string> = {};
