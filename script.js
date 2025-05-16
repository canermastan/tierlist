document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Champion data for each role
    const championData = {
        top: [
            { name: 'Sett', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Sett.png', rank: 1 },
            { name: 'Aatrox', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Aatrox.png', rank: 2 },
            { name: 'Shen', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Shen.png', rank: 3 },
            { name: 'Mordekaiser', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Mordekaiser.png', rank: 4 },
            { name: 'Darius', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Darius.png', rank: 5 },
            { name: 'Malphite', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Malphite.png', rank: 6 },
            { name: 'Renekton', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Renekton.png', rank: 7 }
        ],
        jungle: [
            { name: 'Viego', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Viego.png', rank: 1 },
            { name: 'Lee Sin', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/LeeSin.png', rank: 2 },
            { name: 'Nocturne', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nocturne.png', rank: 3 },
            { name: 'Kayn', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Kayn.png', rank: 4 },
            { name: 'Jarvan IV', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/JarvanIV.png', rank: 5 },
            { name: 'Naafiri', image: 'https://leagueofitems.com/images/champions/tiles/256/950.webp', rank: 6 },
            { name: 'Xin Zhao', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/XinZhao.png', rank: 7 }
        ],
        mid: [
            { name: 'Ahri', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Ahri.png', rank: 1 },
            { name: 'Sylas', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Sylas.png', rank: 2 },
            { name: 'Zoe', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Zoe.png', rank: 3 },
            { name: 'Akali', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Akali.png', rank: 4 },
            { name: 'Vex', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Vex.png', rank: 5 },
            { name: 'Viktor', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Viktor.png', rank: 6 },
            { name: 'Yone', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Yone.png', rank: 7 }
        ],
        adc: [
            { name: 'Jhin', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Jhin.png', rank: 1 },
            { name: 'Lucian', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lucian.png', rank: 2 },
            { name: 'Caitlyn', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Caitlyn.png', rank: 3 },
            { name: 'Kai\'Sa', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Kaisa.png', rank: 4 },
            { name: 'Ezreal', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Ezreal.png', rank: 5 },
            { name: 'Miss Fortune', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/MissFortune.png', rank: 6 },
            { name: 'Jinx', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Jinx.png', rank: 7 }
        ],
        support: [
            { name: 'Lulu', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lulu.png', rank: 1 },
            { name: 'Nami', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nami.png', rank: 2 },
            { name: 'Nautilus', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nautilus.png', rank: 3 },
            { name: 'Braum', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Braum.png', rank: 4 },
            { name: 'Elise', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Elise.png', rank: 5 },
            { name: 'Leona', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Leona.png', rank: 6 },
            { name: 'Thresh', image: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Thresh.png', rank: 7 }
        ]
    };

    // Populate champions for each role
    Object.keys(championData).forEach(role => {
        const championsContainer = document.querySelector(`#${role} .champions`);
        
        championData[role].forEach(champion => {
            const championElement = document.createElement('div');
            championElement.className = 'champion';
            
            // Add special class for top 3 champions
            if (champion.rank <= 3) {
                championElement.classList.add('champion-top-3', `champion-${champion.rank}`);
            }
            
            championElement.innerHTML = `
                <div class="champion-img">
                    <img src="${champion.image}" alt="${champion.name}">
                </div>
                <div class="champion-rank">${champion.rank}</div>
                <div class="champion-name">${champion.name}</div>
            `;
            
            championsContainer.appendChild(championElement);
        });
    });

    // Team Composition Data
    const compData = [
        {
            rank: 1,
            name: "XAYAH & RAKAN COMP",
            description: "Xayah ve Rakan'ın sinerji avantajını kullanan güçlü bir takım kompozisyonu.",
            champions: [
                { role: "top", name: "Singed", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Singed.png" },
                { role: "jungle", name: "Lillia", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lillia.png" },
                { role: "mid", name: "Diana", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Diana.png" },
                { role: "adc", name: "Xayah", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Xayah.png" },
                { role: "support", name: "Rakan", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Rakan.png" }
            ],
            alternates: [
                { role: "top", name: "Trundle", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Trundle.png" },
                { role: "jungle", name: "Nocturne", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nocturne.png" },
                { role: "mid", name: "Swain", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Swain.png" },
                { role: "adc", name: "Xayah", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Xayah.png" },
                { role: "support", name: "Rakan", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Rakan.png" }
            ]
        },
        {
            rank: 2,
            name: "DOUBLE POKE COMP",
            description: "League of Legends'ta karşı oynaması en sinir bozucu ve zor eşleşmelerden biri olan çift poke bottom lane. Sürekli yetenekler ve pokelerle sizi yıpratırlar. Laning aşamasında, kill almak, sağlık avantajı ve kule plakası kazanmak için baskı uygulamaya devam etmelisiniz. Sürekli poke atarsanız, eşleşmeyi kazanırsınız. Ganklenmemek için ward koymayı unutmayın.",
            champions: [
                { role: "top", name: "Sion", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Sion.png" },
                { role: "jungle", name: "Xin Zhao", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/XinZhao.png" },
                { role: "mid", name: "Diana", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Diana.png" },
                { role: "adc", name: "Miss Fortune", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/MissFortune.png" },
                { role: "support", name: "Zyra", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Zyra.png" }
            ],
            alternates: [
                { role: "top", name: "Malphite", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Malphite.png" },
                { role: "jungle", name: "Vi", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Vi.png" },
                { role: "mid", name: "Tristana", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Tristana.png" },
                { role: "adc", name: "Seraphine", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Seraphine.png" },
                { role: "support", name: "Vel'Koz", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Velkoz.png" }
            ]
        },
        {
            rank: 3,
            name: "EARLY SKIRMISH",
            description: "Erken çatışma kompozisyonu, 1v1 ve 2v2'lerde iyi olan şampiyonlara dayanır. Rakiplerinin önüne geçmek için genellikle oyunun erken aşamalarında dövüşürler. Bu takım kompozisyonunda oynarken, erken bir avantaj elde ederek ve kartopu etkisi yaratarak düşüşe geçmemelisiniz. Bu takım kompozisyonu ölümcül ve eğlenceli olabilir. Takım olarak gruplaşıp hamleler yapmayı unutmayın ve tüm oyunu split-push yapmayın!",
            champions: [
                { role: "top", name: "Fiora", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Fiora.png" },
                { role: "jungle", name: "Vi", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Vi.png" },
                { role: "mid", name: "Talon", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Talon.png" },
                { role: "adc", name: "Nilah", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nilah.png" },
                { role: "support", name: "Leona", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Leona.png" }
            ],
            alternates: [
                { role: "top", name: "Renekton", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Renekton.png" },
                { role: "jungle", name: "Lillia", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lillia.png" },
                { role: "mid", name: "Tristana", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Tristana.png" },
                { role: "adc", name: "Vayne", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Vayne.png" },
                { role: "support", name: "Lulu", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lulu.png" }
            ]
        },
        {
            rank: 4,
            name: "VAYNE CARRY COMP",
            description: "Bu takım kompozisyonu, ana taşıyıcının Vayne olduğu bottom lane etrafında oynar. İdeal olarak, Vayne'e iyileştirme ve kalkan sağlayabilen bir destek şampiyonu eşlik eder. Vayne'i güçlendirmek için güçlü bir ön cephe ve CC'ye sahip şampiyonlara sahip olmak önemlidir. Erken avantaj elde etmeniz gerekiyor, bu yüzden Jungler ve Mid lane'inizin sizi sık sık ganklemeye bakması gerekiyor. Erken bir avantaj elde edebilirseniz, kartopu etkisi yaratacak ve oyunun ilerleyen bölümlerinde inanılmaz derecede güçlü olacaksınız.",
            champions: [
                { role: "top", name: "Aatrox", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Aatrox.png" },
                { role: "jungle", name: "Gragas", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Gragas.png" },
                { role: "mid", name: "Zoe", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Zoe.png" },
                { role: "adc", name: "Vayne", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Vayne.png" },
                { role: "support", name: "Lulu", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lulu.png" }
            ],
            alternates: [
                { role: "top", name: "Renekton", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Renekton.png" },
                { role: "jungle", name: "Jarvan IV", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/JarvanIV.png" },
                { role: "mid", name: "Galio", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Galio.png" },
                { role: "adc", name: "Vayne", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Vayne.png" },
                { role: "support", name: "Soraka", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Soraka.png" }
            ]
        },
        {
            rank: 5,
            name: "RUMBLE CARRY COMP",
            description: "Bu takım kompozisyonu, ana taşıyıcı olarak Rumble'a dayanır ve Top veya Mid lane üzerinden takımınızı taşır. Bu kompozisyon, güçlü bir erken oyun Jungler'ına ve takım savaşlarında iyi olan şampiyonlara sahip olmaya dayanır. Temel olarak Rumble'ın taşıyıcı olduğu bir takım savaşı kompozisyonudur. Erken dönemde birden fazla gank almalı ve kartopu etkisi yaratmalıdır. Takım savaşlarında, yakın bir şekilde gruplaşın ve iyi bir Ultimate atabilmesi için ormanda veya haritanın dar bölgelerinde savaşlar arayın.",
            champions: [
                { role: "top", name: "Rumble", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Rumble.png" },
                { role: "jungle", name: "Jarvan IV", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/JarvanIV.png" },
                { role: "mid", name: "Orianna", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Orianna.png" },
                { role: "adc", name: "Kai'Sa", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Kaisa.png" },
                { role: "support", name: "Nami", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nami.png" }
            ],
            alternates: [
                { role: "top", name: "Rumble", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Rumble.png" },
                { role: "jungle", name: "Maokai", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Maokai.png" },
                { role: "mid", name: "LeBlanc", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Leblanc.png" },
                { role: "adc", name: "Senna", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Senna.png" },
                { role: "support", name: "Rakan", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Rakan.png" }
            ]
        },
        {
            rank: 6,
            name: "PICK COMP",
            description: "Bir Pick Comp, temel olarak adında belirtildiği gibidir: pozisyonu bozuk olan şampiyonları yakalar. Bu takım kompozisyonu son derece etkili olabilir. Birden fazla rolde angaje olma yolları olan ve çatışmalarda harika olan şampiyonları seçmek iyidir. Rell harika bir Jungler olduğu için, onu destek veya Jungle rolünde esnetebilirsiniz. Ayrıca, aşırı ileri gitmiş insanları yakalayabilen Zoe, Sivir ve Renata gibi şampiyonlar da var. Gwen de güçlü çatışma gücü ve all-in özelliği sayesinde harika bir seçimdir.",
            champions: [
                { role: "top", name: "Gwen", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Gwen.png" },
                { role: "jungle", name: "Rell", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Rell.png" },
                { role: "mid", name: "Zoe", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Zoe.png" },
                { role: "adc", name: "Sivir", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Sivir.png" },
                { role: "support", name: "Renata", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Renata.png" }
            ],
            alternates: [
                { role: "top", name: "K'Sante", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/KSante.png" },
                { role: "jungle", name: "Zac", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Zac.png" },
                { role: "mid", name: "Twisted Fate", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/TwistedFate.png" },
                { role: "adc", name: "Caitlyn", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Caitlyn.png" },
                { role: "support", name: "Rell", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Rell.png" }
            ]
        },
        {
            rank: 7,
            name: "NAMI LUCIAN COMP",
            description: "Bu takım kompozisyonu, bottom lane etrafında oynar ve Lucian + Nami üzerinden taşır. Genellikle onları kartopu etkisi yaratmak için kolay gank yapabilen veya erken oyun Jungler'ı ile oynanır. Nami Lucian lane'inde, erken bir avantaj elde etmeniz ve kartopu etkisi yaratmanız gerektiği için erken dönemde çok agresif oynamak önemlidir. Amacınız, bottom lane'i öne geçirmek, oradan kartopu etkisi yaratmak ve takım savaşlarında oyunu taşıması için Lucian'ı güçlendirmektir.",
            champions: [
                { role: "top", name: "K'Sante", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/KSante.png" },
                { role: "jungle", name: "Gragas", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Gragas.png" },
                { role: "mid", name: "Viktor", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Viktor.png" },
                { role: "adc", name: "Lucian", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lucian.png" },
                { role: "support", name: "Nami", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nami.png" }
            ],
            alternates: [
                { role: "top", name: "Shen", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Shen.png" },
                { role: "jungle", name: "Trundle", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Trundle.png" },
                { role: "mid", name: "Anivia", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Anivia.png" },
                { role: "adc", name: "Lucian", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lucian.png" },
                { role: "support", name: "Nami", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nami.png" }
            ]
        },
        {
            rank: 8,
            name: "TEAM FIGHT COMP",
            description: "Bir takım savaşı kompozisyonunun ana amacı, 5 kişi olarak gruplaşmak ve düşmanla savaşmaktır. Takım savaşlarında gerçekten iyi olan ve onları alt etmek için düşman takımına katmanlandırabileceğiniz çok sayıda CC'ye sahip şampiyonlar seçin. Takım savaşlarını kazanma şansınızı en üst düzeye çıkarmak için birbirinizin bekleme sürelerini takip ettiğinizden emin olun. Takım savaşlarında zorlanacağınız için erken dönemde geri düşmemek için elinizden geleni yapmanızı tavsiye ederim.",
            champions: [
                { role: "top", name: "Dr. Mundo", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/DrMundo.png" },
                { role: "jungle", name: "Viego", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Viego.png" },
                { role: "mid", name: "Lissandra", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Lissandra.png" },
                { role: "adc", name: "Kai'Sa", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Kaisa.png" },
                { role: "support", name: "Nami", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Nami.png" }
            ],
            alternates: [
                { role: "top", name: "Maokai", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Maokai.png" },
                { role: "jungle", name: "Jarvan IV", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/JarvanIV.png" },
                { role: "mid", name: "Orianna", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Orianna.png" },
                { role: "adc", name: "Varus", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Varus.png" },
                { role: "support", name: "Thresh", image: "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/Thresh.png" }
            ]
        }
    ];

    // Role icon mapping
    const roleIcons = {
        top: "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-top.png",
        jungle: "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-jungle.png",
        mid: "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-middle.png",
        adc: "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-bottom.png",
        support: "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-utility.png"
    };

    // Populate comp tier list
    const compContainer = document.querySelector('.comp-container');
    
    compData.forEach(comp => {
        const compElement = document.createElement('div');
        compElement.className = 'comp-item';
        
        // Create comp header
        const compHeader = document.createElement('div');
        compHeader.className = 'comp-header';
        
        compHeader.innerHTML = `
            <div class="comp-rank">${comp.rank}</div>
            <div class="comp-title">${comp.name}</div>
        `;
        
        compElement.appendChild(compHeader);
        
        // Create comp description
        const compDesc = document.createElement('div');
        compDesc.className = 'comp-description';
        compDesc.textContent = comp.description;
        
        compElement.appendChild(compDesc);
        
        // Create main team composition
        const compTeam = document.createElement('div');
        compTeam.className = 'comp-team';
        
        comp.champions.forEach(champion => {
            const roleElement = document.createElement('div');
            roleElement.className = 'comp-role';
            
            roleElement.innerHTML = `
                <img class="comp-role-icon" src="${roleIcons[champion.role]}" alt="${champion.role}">
                <div class="comp-champion">
                    <div class="comp-champion-img">
                        <img src="${champion.image}" alt="${champion.name}">
                    </div>
                    <div class="comp-champion-name">${champion.name}</div>
                </div>
            `;
            
            compTeam.appendChild(roleElement);
        });
        
        compElement.appendChild(compTeam);
        
        // Create alternates section
        const compAlternates = document.createElement('div');
        compAlternates.className = 'comp-alternates';
        
        compAlternates.innerHTML = `
            <div class="comp-alternates-title">Alternative Picks</div>
            <div class="comp-alternates-list"></div>
        `;
        
        const compAlternatesList = compAlternates.querySelector('.comp-alternates-list');
        
        comp.alternates.forEach(alt => {
            const altElement = document.createElement('div');
            altElement.className = 'comp-role';
            
            altElement.innerHTML = `
                <img class="comp-role-icon" src="${roleIcons[alt.role]}" alt="${alt.role}">
                <div class="comp-champion">
                    <div class="comp-champion-img">
                        <img src="${alt.image}" alt="${alt.name}">
                    </div>
                    <div class="comp-champion-name">${alt.name}</div>
                </div>
            `;
            
            compAlternatesList.appendChild(altElement);
        });
        
        compElement.appendChild(compAlternates);
        compContainer.appendChild(compElement);
    });
}); 
