import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  environment: 'gcp-starter',
  apiKey: '5e1395d8-6335-4194-bca5-e1ef4185d492',
});
const index = pinecone.index('searchapi');

export const getResults = async () => {
  const queryResponse = await index.query({
    vector: [
      -0.008300432, -0.014106712, -0.021213705, -0.016158354, -0.033952657,
      0.00025142665, -0.013945799, -0.0283207, -0.0152599225, -0.009594441,
      0.027757503, 0.0169361, -0.024016274, -0.012403715, -0.026134964,
      0.0032970416, 0.018156357, 0.014535814, 0.021508712, -0.02019459,
      -0.0054576346, 0.024619699, -0.0021907643, -0.017794304, -0.013302146,
      -0.0064331703, 0.009594441, -0.018880466, -0.0023550298, 0.026175192,
      -0.00083431747, 0.011706426, -0.002735522, -0.016426543, -0.028615708,
      0.016520407, -0.009172045, -0.0015127504, 0.000011910029, -0.006808634,
      -0.006356066, 0.01043253, -0.00503859, -0.001196791, -0.015125828,
      -0.006912557, 0.014549223, 0.0010509634, -0.011693016, 0.012785884,
      0.02250101, 0.001414694, -0.022380326, -0.0076634847, 0.020529825,
      -0.013684316, 0.0056051384, -0.005836451, 0.02090529, -0.005836451,
      0.0028159786, -0.010613558, -0.024257645, 0.01462968, 0.000024736717,
      -0.004448576, -0.0009101645, 0.0051056375, -0.0003149119, 0.0007023185,
      0.0012185812, 0.0059202597, 0.009842516, -0.0037110576, 0.041220564,
      -0.02805251, -0.020395732, 0.020838242, 0.01719088, -0.006071116,
      0.030680757, -0.002309773, -0.016171763, 0.011511989, 0.009916267,
      -0.00036163535, -0.00035199733, 0.027019985, -0.009433528, 0.015380607,
      0.023412852, 0.019550938, 0.0032417278, 0.0015781213, 0.00199968,
      -0.0014264273, -0.021481894, 0.03644681, 0.0029819203, -0.020623691,
      -0.017499296, 0.011377894, -0.0050151236, -0.015112419, -0.019148655,
      -0.002311449, 0.0073885918, -0.0016812063, 0.017123831, -0.0104593495,
      0.009011132, 0.013516697, 0.033335824, -0.009869334, -0.0029450443,
      -0.003972541, 0.010144228, -0.018692734, -0.0005292531, -0.011558922,
      -0.019993449, 0.027891599, 0.022715561, -0.023158072, 0.025933823,
      0.018531822, -0.01438831, -0.0029165493, 0.013409422, 0.0027891598,
      0.02526335, 0.0019024618, -0.0037479335, -0.0010283351, -0.014924686,
      0.020100724, -0.039155513, 0.03384538, -0.022474192, -0.014924686,
      0.00038112092, 0.038887326, -0.019617984, 0.017995445, -0.0016661207,
      0.030493027, 0.021146659, 0.023305576, -0.009379891, -0.005980602,
      -0.0025746091, -0.013724543, 0.022125546, 0.006724825, 0.0072276783,
      0.021146659, -0.014669907, 0.019899582, -0.042883333, -0.0062756096,
      0.0019259283, -0.007583028, 0.014884459, -0.006061059, 0.029393453,
      0.027918417, -0.0054945108, -0.0076500755, 0.011096297, 0.0119679095,
      -0.02294352, 0.015514702, -0.011451647, 0.0067281774, -0.02015436,
      0.018665915, 0.02877662, -0.010814698, -0.004629603, 0.010419121,
      -0.0028897305, 0.026523836, 0.014240806, 0.028240243, 0.0061817435,
      -0.01623881, 0.021213705, -0.037251376, 0.0045323847, -0.014964915,
      0.012329964, 0.022232821, -0.011337667, -0.013932389, -0.676264,
      -0.032584894, 0.02272897, -0.013697725, 0.008716124, 0.0012646761,
      0.0029098445, 0.008675896, -0.005571615, -0.010385597, 0.008380889,
      0.015018553, 0.0074824574, 0.0057727564, -0.0056520714, -0.016721549,
      0.014267625, -0.00927932, 0.0014389986, 0.00091100263, -0.020610282,
      0.030546663, -0.014012846, -0.012202574, 0.02459288, 0.016265629,
      0.004344653, -0.0022108785, -0.020449368, -0.0023717915, -0.0006432332,
      0.029393453, -0.021776902, -0.02250101, 0.05218947, 0.0007467372,
      -0.012403715, 0.031190315, 0.018156357, 0.042078767, -0.015273332,
      0.014549223, 0.012403715, -0.012034956, -0.011357781, 0.02762341,
      0.017955216, 0.009701717, 0.009487166, -0.03132441, 0.020221408,
      0.01926934, -0.0059437263, 0.013644087, 0.0033925837, -0.0020968984,
      0.016869053, 0.020610282, -0.0060778204, 0.0012462381, -0.013811705,
      -0.00017170346, -0.02507562, -0.015219694, -0.011719835, 0.02203168,
      -0.024619699, 0.002272897, 0.0039926553, -0.0060677635, 0.0061448677,
      0.01161256, -0.028562069, 0.006825396, 0.015058781, 0.0064532845,
      0.020315275, -0.016667912, -0.00063527137, 0.00015399883, 0.010124113,
      0.005853213, -0.010358779, -0.019376615, 0.037224557, 0.015474473,
      -0.02899117, -0.01829045, 0.0005757671, 0.021320982, 0.003583668,
      -0.0014876077, -0.004254139, -0.0073885918, -0.009668193, 0.016895872,
      -0.01369102, -0.011853929, 0.013617268, -0.015662204, -0.02829388,
      0.0007991177, 0.014656498, 0.0040228264, -0.003912199, -0.010881746,
      -0.017110422, 0.013355784, 0.024431966, -0.017740665, 0.036822274,
      0.011874043, -0.02227305, -0.005290017, -0.01507219, -0.024217416,
      0.037895028, -0.0087094195, 0.017539524, -0.016533818, 0.009815697,
      0.0076903035, 0.0011515341, -0.0044820993, -0.009513985, 0.0122092785,
      -0.0034596308, -0.014589451, -0.031485323, -0.003687591, 0.008776466,
      0.006865624, 0.017338382, 0.00084479357, 0.0031311, -0.0051626274,
      0.018706143, -0.015916985, -0.0030305295, -0.010660491, -0.019752078,
      -0.0009185454, -0.00038719707, 0.012987025, 0.025008572, -0.039343245,
      -0.0077506457, 0.0076634847, -0.012363487, 0.0010291731, -0.012792588,
      0.003959132, -0.033228546, 0.0141201215, -0.0017314916, -0.014683317,
      -0.038350947, -0.013161348, -0.023493307, 0.018183175, 0.0050486475,
      -0.0020231465, -0.026765207, -0.00027635982, 0.012578038, -0.023681039,
      -0.009728536, 0.033013996, -0.0017231107, -0.038914144, -0.0361518,
      -0.018464774, 0.002829388, 0.008132814, -0.0069796043, 0.023908999,
      -0.024740383, -0.012477467, -0.011773473, -0.011062773, 0.010707423,
      0.0021723264, -0.009574328, 0.01161256, 0.034918133, -0.005997364,
      0.016775187, 0.013610563, 0.0012621619, 0.02339944, -0.016574046,
      0.0062253242, 0.017070195, 0.00916534, -0.011746653, -0.027328402,
      0.02040914, -0.007938378, -0.013664201, 0.033979475, 0.026765207,
      -0.007033242, 0.0257595, -0.010258208, 0.005333598, -0.03086849,
      -0.0068321005, -0.025209714, 0.041461933, 0.03183397, 0.010526396,
      0.0013836847, -0.0009478785, -0.0032685467, 0.00214886, 0.024566062,
      -0.006563912, 0.0147771835, -0.0012998759, -0.025156075, -0.017056786,
      0.016627684, 0.014227397, -0.021615988, 0.0061247535, -0.00801213,
      0.015420835, 0.015943803, 0.030546663, -0.01333567, 0.004968191,
      0.02345308, 0.0018605574, 0.004666479, 0.0057660514, -0.0071606315,
      0.008059063, -0.017874759, 0.03392584, 0.010452645, 0.01229644,
      0.03041257, 0.015528111, -0.007978606, -0.00237682, -0.0076768943,
      0.019242521, -0.00009569927, 0.007864626, 0.026134964, -0.016520407,
      0.016520407, -0.00048818678, -0.009138521, 0.03153896, -0.01648018,
      0.036929548, 0.0043949382, 0.009648079, 0.032397162, -0.008944085,
      0.018625688, 0.006074468, -0.0119679095, 0.012946797, 0.007945082,
      -0.0045491466, 0.017311564, -0.02130757, 0.011451647, -0.0008657458,
      -0.0025444378, 0.012430534, 0.005477749, 0.024445375, -0.00916534,
      0.016198581, -0.0039457222, 0.0036373057, 0.0024488957, -0.03432812,
      -0.024887888, 0.023828544, 0.010694014, 0.00019328424, -0.023064205,
      0.0013870371, -0.0022963635, -0.0019443661, 0.004331243, 0.029956648,
      0.01194109, 0.0026617702, -0.0023466488, -0.0073818867, -0.008575326,
      0.022916703, -0.018665915, 0.02529017, 0.010868337, -0.0000082237475,
      -0.014079893, -0.0036104869, -0.01216905, 0.022045089, 0.014508994,
      0.002385201, -0.0078914445, -0.0019678327, -0.016305856, -0.011163344,
      -0.0063158376, -0.013402717, -0.001330047, 0.005440873, 0.014374901,
      -0.008776466, -0.017056786, 0.026175192, 0.020476187, -0.007402001,
      -0.014482176, -0.0058398033, 0.008514983, 0.09118407, 0.036634542,
      0.0041133403, 0.0045726127, -0.012557924, -0.0017817769, -0.03481086,
      0.010694014, 0.0044720424, -0.008541802, 0.000914355, -0.0049179057,
      -0.021213705, 0.003583668, 0.017003147, -0.018008854, -0.001517779,
      -0.0139592085, 0.013282033, -0.020248227, -0.012115412, 0.002254459,
      -0.022433963, 0.013731248, 0.0050955806, -0.0098492205, 0.008541802,
      0.009071474, -0.010512987, -0.019121835, -0.016587455, -0.024512423,
      -0.016533818, 0.01125721, -0.017941806, -0.018920695, 0.020798014,
      0.006299076, 0.0119679095, -0.011210277, 0.031351227, 0.014696727,
      0.0064935125, -0.00371441, -0.00028117883, -0.0056554237, -0.0027874836,
      -0.0017465772, 0.031190315, -0.026778616, 0.036339533, -0.0046597742,
      0.0033825268, 0.0075092763, 0.020275045, 0.033952657, -0.023600582,
      -0.014482176, -0.00574929, -0.009265911, -0.007536095, -0.0132686235,
      0.02437833, -0.007120403, -0.023681039, -0.021535533, -0.016118126,
      -0.0035870203, -0.013463059, -0.012940092, -0.0050285333, -0.009098293,
      -0.022849655, 0.0043614144, 0.00097637356, -0.005702357, 0.024941524,
      -0.028562069, 0.0014230749, 0.01900115, 0.01855864, -0.008025539,
      0.007837807, -0.027650228, -0.0044653374, 0.009332958, 0.01829045,
      -0.022004861, -0.014656498, -0.007797579, -0.0019091665, -0.00661755,
      0.029125264, -0.032853086, -0.007093584, -0.011907566, 0.023734678,
      0.024887888, 0.009842516, 0.009735241, 0.0027455792, -0.013516697,
      0.008374184, -0.020918699, -0.0005401483, 0.021884177, 0.0057761087,
      0.019658213, -0.0109890215, 0.006195153, 0.01717747, -0.022433963,
      0.0054475777, 0.009922972, 0.010399007, 0.009064769, -0.02343967,
      0.010291731, -0.014187168, -0.036071345, -0.010928679, -0.030117562,
      0.0134295365, 0.0064063515, 0.0019058142, 0.014951506, 0.0028796734,
      -0.0071338126, 0.000035540208, -0.014589451, -0.020690737, 0.03389902,
      -0.00695949, -0.0130943, -0.02805251, -0.012430534, -0.003243404,
      -0.004187092, 0.0072209737, -0.029527547, -0.01461627, -0.0046061366,
      -0.00021140793, -0.00052464363, -0.0016828824, -0.018370908, -0.011082888,
      0.016641093, -0.009762059, 0.017968625, -0.019617984, 0.026979757,
      -0.0048072776, -0.021750083, -0.005642014, -0.010875042, -0.021267343,
      -0.0036976482, 0.019819126, 0.019993449, 0.031056222, 0.018960923,
      -0.004552499, 0.0064365226, -0.0008385079, 0.0051358086, 0.0027874836,
      0.013530107, -0.026590884, 0.024069913, 0.0036238963, 0.017432248,
      0.022112137, -0.011210277, -0.005055352, 0.006486808, 0.0041468637,
      0.005987307, -0.005246436, -0.036741816, 0.0031461855, 0.005779461,
      0.013214986, 0.01276577, -0.014656498, -0.004415052, -0.00614822,
      0.018236814, -0.014240806, -0.007194155, 0.018934105, -0.01300714,
      0.031136679, -0.0065102745, 0.0014297796, 0.013027254, -0.015849937,
      -0.012571333, 0.009735241, 0.023117844, 0.02156235, 0.011424827,
      0.030278474, 0.008132814, 0.0012940093, 0.006885738, 0.014374901,
      0.0042776056, 0.0011565627, -0.019738669, -0.02601428, -0.027784323,
      -0.02415037, -0.03438176, -0.010063771, 0.0024740384, -0.006771758,
      0.023318985, -0.023359213, -0.028749801, -0.008253499, 0.0026952939,
      0.038940962, 0.012584742, -0.002036556, 0.03845822, -0.0043815286,
      -0.0116796065, -0.006932671, -0.009346367, -0.0022645162, 0.0052766073,
      0.047254805, -0.021683035, -0.0047972207, 0.0069527854, -0.024579471,
      -0.022889884, -0.034033112, 0.016359495, -0.009058065, 0.008910561,
      -0.031163497, -0.009460348, -0.006356066, 0.0087094195, -0.025625406,
      0.031860787, -0.005628605, -0.0076768943, -0.040416, 0.029795736,
      0.005065409, 0.011451647, 0.013657496, -0.024217416, 0.0048877345,
      0.004790516, -0.024217416, -0.009701717, -0.004103283, 0.037921846,
      0.0010057066, -0.009413415, 0.008722829, -0.0036909434, 0.0013040663,
      0.013174757, 0.009339662, 0.023493307, -0.008682601, 0.010533101,
      0.0035132687, -0.025223123, 0.005856565, -0.005695652, -0.012564628,
      0.0069527854, 0.0043647666, 0.01877319, 0.012618266, 0.020583462,
      -0.027087033, 0.0008410222, -0.017097013, -0.010533101, -0.026617702,
      -0.0039457222, -0.008736239, -0.030707577, -0.03151214, -0.027449086,
      0.017982034, 0.010848222, -0.008548507, -0.014106712, 0.0025896947,
      0.03384538, -0.00707347, -0.0014306178, 0.0018538526, 0.0033523554,
      -0.016453361, -0.00903795, 0.010754356, -0.052752666, -0.002225964,
      0.0038049235, -0.021388028, -0.00573588, -0.01998004, 0.008065768,
      0.023734678, 0.004874325, 0.020462777, 0.023761496, 0.013255213,
      0.0050587044, -0.010653785, 0.014669907, -0.024204006, 0.012919978,
      -0.0038619135, -0.02551813, -0.01485764, 0.0035669063, 0.00085275545,
      0.0046765357, -0.002122041, -0.0038987894, -0.010244799, 0.032102156,
      -0.009607851, -0.023573764, -0.004093226, 0.013214986, -0.024726974,
      0.023158072, 0.0011900862, -0.0019611279, -0.0024455434, 0.001196791,
      0.001651035, 0.008105996, -0.013362489, 0.008407707, 0.00905136,
      -0.020248227, 0.009540804, -0.015139237, -0.009922972, 0.020301865,
      -0.005645367, -0.013711134, -0.027864778, -0.015943803, -0.019738669,
      -0.030439388, -0.013161348, 0.0011842196, 0.027891599, 0.00650357,
      -0.025853366, 0.01149858, 0.0029835964, -0.0028595591, 0.0106202625,
      -0.01414694, 0.028213425, -0.0022946873, 0.0010383921, -0.00016583684,
      -0.0074087055, 0.011216981, 0.016855644, 0.0011590769, 0.0036473628,
      0.024230825, -0.022554647, -0.0035702586, 0.007515981, 0.009869334,
      0.009567623, 0.018960923, 0.007006423, -0.039530978, -0.013577039,
      -0.012725541, 0.017579753, 0.000111989626, -0.0021170124, -0.005102285,
      0.00371441, -0.00061264297, -0.032236252, -0.01625222, 0.004743583,
      0.010667196, 0.02459288, -0.0043781763, 0.0014272653, 0.016211992,
      -0.0025913708, -0.015353789, 0.003273575, -0.0021974691, -0.011833815,
      -0.017687028, 0.011927681, -0.025384037, 0.021253934, -0.0122897355,
      0.005202856, 0.017552933, 0.0008917266, -0.0085015735, -0.0070868796,
      -0.029903011, 0.014294444, -0.018250223, -0.0025511426, 0.0057291756,
      -0.01948389, -0.020730967, -0.009554213, -0.014066484, -0.009882744,
      -0.028159786, 0.019135246, 0.00424073, -0.0021320982, -0.014334672,
      -0.006289019, -0.0069796043, -0.0043614144, 0.011337667, 0.20350139,
      0.003972541, -0.022675334, 0.07031901, -0.030519845, 0.0139592085,
      0.015823118, -0.010653785, 0.0136709055, 0.017593162, 0.0116796065,
      0.014401719, -0.013597154, -0.00905136, -0.001971185, 0.0019762137,
      -0.026644522, -0.021401437, -0.0063158376, -0.017204288, -0.010050362,
      0.01598403, 0.009011132, -0.0054174066, 0.027314993, -0.0050285333,
      0.013972618, -0.01576948, -0.017687028, 0.01784794, -0.009131816,
      -0.040576912, 0.00067885197, 0.017512705, 0.011746653, -0.004458633,
      -0.001489284, -0.0089977225, 0.009366482, 0.040523272, -0.033201728,
      -0.00036331153, 0.0026349514, -0.0015161028, -0.026362924, 0.021025974,
      -0.004894439, 0.00654715, 0.0019845944, -0.010720833, -0.031351227,
      -0.020342093, 0.03180715, 0.022219412, -0.006637664, -0.011659493,
      0.034864496, -0.0015269979, -0.02411014, -0.014334672, -0.025692452,
      0.017204288, -0.010137523, -0.0011624292, -0.0062856665, 0.020704148,
      -0.01554152, -0.009286025, 0.017029965, -0.021240525, 0.017097013,
      0.004063055, -0.010982317, 0.009145225, -0.021964634, -0.030761214,
      0.014187168, 0.036741816, -0.009547508, 0.017740665, -0.013087596,
      0.0015596834, 0.0045390893, -0.027422268, -0.035427693, -0.028240243,
      -0.0011465056, 0.014455357, 0.01031855, 0.0055179773, 0.0034110218,
      -0.023251938, -0.008689306, 0.0063795326, 0.02436492, 0.0019527471,
      -0.02339944, 0.013731248, -0.017378611, -0.006215267, -0.032450803,
      0.0031378048, 0.0026852367, -0.008635668, -0.0042507867, 0.0039390177,
      -0.016118126, 0.013986027, 0.030171199, -0.01717747, -0.004327891,
      -0.028615708, 0.006708063, -0.0029215778, -0.017740665, 0.004760345,
      -0.008722829, -0.00799872, -0.016761778, -0.0034009647, 0.011545513,
      -0.0093195485, 0.00620521, -0.0054308157, -0.016211992, 0.0046932977,
      0.005940374, -0.0040228264, 0.0094804615, -0.03062712, 0.011652788,
      -0.01007718, 0.022983748, -0.014723545, -0.012229393, 0.010881746,
      0.009346367, -0.012826112, -0.008890447, -0.035615426, 0.0013610563,
      0.009185454, 0.008280318, -0.02738204, 0.006630959, -0.017365202,
      0.01218246, 0.002792512, -0.01716406, -0.02184395, -0.0033490031,
      -0.01717747, -0.0065873787, 0.007153927, 0.018357499, -0.0104593495,
      -0.028562069, -0.026644522, 0.010224684, 0.016842235, -0.027060214,
      0.006590731, 0.03338946, -0.0141201215, 0.0014163702, 0.01114323,
      -0.17346428, 0.02318489, 0.02018118, -0.0010920299, 0.03250444,
      -0.010452645, -0.0028226834, 0.02412355, -0.025826547, 0.017418839,
      -0.0077372366, 0.016198581, -0.024726974, -0.021615988, 0.007945082,
      -0.010781175, -0.006372828, 0.00016677969, -0.0020315275, 0.0071740407,
      0.040013716, -0.01172654, 0.03845822, 0.0029383395, 0.002158917,
      -0.0099296775, -0.010479463, 0.0069930134, -0.0056654806, 0.00731484,
      0.0066242544, -0.021388028, 0.022420553, 0.020449368, 0.021683035,
      -0.008930675, 0.0072947256, 0.0010618586, -0.004726821, 0.008293727,
      0.01460286, 0.022782609, -0.0023701154, -0.00986263, -0.005383883,
      0.02947391, 0.03666136, 0.004344653, -0.006335952, -0.019671623,
      0.022581467, -0.036983185, 0.024297873, -0.0052196174, 0.035186324,
      0.007824398, -0.0042675487, 0.01347647, 0.014763773, -0.022407144,
      -0.02971528, -0.021066202, 0.019403433, -0.0031059573, -0.027972054,
      -0.0017717199, -0.016533818, 0.0012294764, 0.0005761861, 0.019993449,
      -0.026657932, -0.014106712, -0.017150652, -0.014817411, 0.0045022136,
      0.019738669, 0.014804002, -0.005437521, 0.009326253, -0.015930394,
      -0.005745937, 0.029500728, -0.005243084, -0.014750364, 0.020275045,
      0.014736955, -0.0049011437, 0.00066837587, 0.008769762, 0.0015563311,
      0.011297438, -0.016600864, 0.006074468, 0.0010358779, 0.008702715,
      0.019685032, -0.002621542, 0.00023403631, 0.015300151, -0.010419121,
      -0.012014843, -0.0052296747, -0.01905479, 0.021227116, 0.03668818,
      0.009265911, -0.00035241636, 0.016869053, 0.026859073, -0.03896778,
      -0.025491312, -0.0037278193, 0.027341811, 0.027703866, -0.012718837,
      0.022568056, 0.030922128, -0.0036071346, 0.026081325, 0.0018890523,
      0.021709854, -0.0038987894, 0.011404714, 0.028642526, 0.009916267,
      -0.018169766, -0.09359776, -0.03875323, -0.008387594, 0.0025796376,
      -0.025357217, 0.005896793, 0.01149858, 0.01485764, -0.0001961128,
      0.029339815, -0.0011833815, 0.006825396, -0.013328966, 0.014643089,
      0.022541238, -0.007978606, 0.0062622, -0.005176037, -0.03523996,
      -0.01182711, -0.008729533, 0.014213988, -0.013214986, 0.0027120556,
      0.014441947, -0.006986309, -0.017901579, 0.001669473, 0.02739545,
      0.0015621977, 0.0007777465, 0.020315275, -0.025008572, -0.027100442,
      -0.014213988, 0.006232029, -0.03180715, 0.016386313, 0.042320136,
      -0.047952093, 0.004934667, 0.014911277, 0.014830821, -0.019215701,
      -0.010016838, 0.019550938, 0.010385597, 0.0120014325, -0.018987741,
      -0.0035702586, -0.006580674, 0.015058781, -0.019792307, -0.024928115,
      0.032370344, -0.024445375, -0.003169652, 0.014643089, 0.0022779256,
      0.0028729686, -0.015206285, -0.012618266, -0.0005854051, 0.013409422,
      -0.015890164, 0.011478465, -0.0055883764, -0.00237682, 0.026698159,
      0.004800573, 0.013865342, 0.0061683343, -0.02366763, -0.015782889,
      -0.00044083476, 0.015447654, -0.015273332, -0.0062018577, 0.015219694,
      -0.011525398, -0.028937533, -0.011914272, 0.008917266, -0.011404714,
      0.023841953, 0.015152647, 0.01438831, 0.015514702, -0.01719088,
      -0.020060495, 0.0010073829, 0.014683317, 0.035374057, -0.036259077,
      -0.0044753947, 0.025504721, -0.013784885, -0.008970903, 0.027100442,
      0.004046293, -0.02437833, -0.03293354, -0.061361514, 0.02136121,
      0.031458504, -0.012135527, -0.01922911, -0.0046597742, 0.01602426,
      -0.019832535, -0.0039356654, -0.018411137, -0.02297034, 0.030600302,
      0.01598403, -0.029178903, -0.002621542, -0.025638815, 0.016761778,
      -0.0100101335, 0.03108304, 0.00078906066, -0.0017499296, 0.013080891,
      0.016118126, 0.014361491, -0.01811613, 0.0043647666, -0.02622883,
      0.011330961, -0.024257645, 0.008474755, 0.018585458, -0.011820406,
      0.016185172, 0.015058781, -0.009232387, -0.0018924046, -0.0194973,
      0.0048139826, -0.0073483633, -0.044599738, -0.030439388, -0.03502541,
      0.017271336, -0.0006553855, 0.010452645, 0.018478183, -0.020543234,
      0.011284028, 0.009212273, 0.015005143, 0.00684551, 0.019765489,
      -0.023412852, -0.0436879, -0.007375182, -0.015447654, 0.012752361,
      0.019443663, 0.0037378764, -0.029554367, 0.0132351, 0.024405148,
      0.026644522, -0.019108426, -0.0021086317, 0.004730174, -0.020503007,
      0.003186414, 0.03620544, -0.028642526, -0.018518412, 0.009996724,
      0.020824833, 0.031726692, 0.0035233255, -0.026349515, -0.0014079893,
      0.0023432965, -0.034971774, 0.020020267, -0.010211275, -0.013744658,
      -0.024096731, -0.011324257, 0.018223405, -0.0054475777, -0.016225401,
      0.0004798059, 0.013302146, 0.015085599, -0.0004291015, 0.014133531,
      -0.0076768943, -0.0064633414, 0.002140479, 0.020932108, -0.004103283,
      -0.013825114, 0.012162345, 0.018062491, -0.0013225042, 0.007402001,
      0.0050754664, -0.023721268, 0.008407707, 0.0033875552, -0.019591166,
      -0.008756353, -0.011431532, 0.007462343, 0.011974614, -0.026550656,
      -0.007683599, 0.019510709, -0.0055515007, -0.023292165, -0.021535533,
      -0.014736955, -0.011364485, 0.00856862, 0.01414694, 0.00085652684,
      0.018840238, 0.0013929037, 0.0049447245, 0.007355068, 0.012417125,
      -0.017231107, 0.028937533, -0.014884459, 0.0056922995, -0.015031962,
      -0.02459288, -0.0005585862, -0.037412286, 0.019095017, -0.012316554,
      0.023198301, 0.010807994, 0.073269084, 0.0034076695, -0.0019158712,
      -0.002046613, -0.018505003, 0.0011984671, 0.0049112006, -0.012470762,
      -0.04384881, 0.008059063, -0.016279038, -0.008199861, 0.034730405,
      0.0030891956, -0.016614273, 0.0021371266, -0.018518412, 0.02090529,
      -0.020999154, -0.008756353, 0.015461064, -0.0034361645, 0.02322512,
      -0.0093195485, -0.0018823476, -0.01438831, -0.0014800649, 0.003895437,
      -0.017740665, 0.0069930134, -0.013657496, 0.0052933693, -0.012343373,
      -0.021025974, 0.004223968, -0.030948946, -0.027489316, -0.004337948,
      0.008226681, 0.01438831, -0.0067918724, 0.023077615, -0.014106712,
      -0.003385879, 0.004716764, -0.033550374, -0.0065940833, -0.01531356,
      -0.014401719,
    ],
    topK: 8,
    includeValues: false,
    includeMetadata: true,
  });

  return queryResponse;
};