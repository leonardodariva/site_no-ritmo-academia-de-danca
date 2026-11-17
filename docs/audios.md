# Narração dos blocos

Integração de 17/11/2026: 108 gravações completas com a voz Luciano, em 14 páginas. Os arquivos foram recuperados das gravações existentes no ElevenLabs, sem novas gerações nesta etapa. São aproximadamente 60 minutos de áudio e 60 MiB de arquivos MP3.

| Página | Rota | Blocos com Luciano |
| --- | --- | ---: |
| Sobre a No Ritmo | `/sobre` | 7 |
| Missão, visão e valores | `/missao-visao-valores` | 3 |
| Aulas em grupo | `/aulas` | 10 |
| Estilos de dança | `/modalidades` | 22 |
| Música e musicalidade | `/musicalidade` | 13 |
| Turmas e horários | `/horarios` | 3 |
| Aulas particulares | `/aulas-particulares` | 9 |
| Formação No Ritmo | `/formacao` | 4 |
| Formação de professores | `/formacao/cfp` | 9 |
| Formação de assistentes | `/formacao/cfa` | 3 |
| Coreografias para eventos | `/coreografias/eventos` | 7 |
| Perguntas frequentes | `/faq` | 9 |
| Contato | `/contato` | 5 |
| Projeto de dança de salão gratuita | `/projetos/danca-de-salao-gratuita-apucarana` | 4 |

As páginas de coreografias para debutantes (incluindo 15 anos), casamentos e gincanas permanecem reservadas para outras vozes. Elas não têm arquivos de Luciano vinculados e continuam com a leitura do navegador disponível.

## Manutenção

- `content/section-audio.ts` associa cada `rota#id-do-bloco` ao respectivo arquivo em `public/audio/`.
- O botão carrega a gravação apenas ao ser acionado. Iniciar outro bloco interrompe a leitura anterior; navegar para outra página também interrompe a reprodução.
- Blocos sem gravação, ou cujo arquivo não possa ser reproduzido, usam a voz do navegador quando disponível.
- Ao alterar o texto de um bloco, revisar sua gravação antes de substituir o arquivo. Gravações novas devem abranger o título e todo o conteúdo do bloco.

## Conferência desta integração

Foram verificados os 108 arquivos MP3, sua integridade, a correspondência dos arquivos servidos por HTTP e a cobertura de todos os blocos previstos nessas 14 páginas. Os controles de iniciar, alternar, parar e encerrar a leitura foram conferidos no site local.
