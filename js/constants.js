// Constants and variables
const localKey = "sllgms-v3";

let savedata = {
    // Telemetry
    "user": {
        "alreadyPrompted": false,
        "telemetry": false,
        "sex": null,
        "age": null
    },
    // State
    "premises": 2,
    "score": 0,
    "questions": [],
    // Meta configurations
    "enableCarouselMode": false,
    "enableMeaningfulWords": true,
    "enableNegation": false,
    "removeNegationExplainer": false,
    "enableStroopEffect": false,
    "enableMeta": false,
    // Classes of questions:
    //     Distinction
    "enableDistinction": true,
    "distinctionTimer": 30,
    //     Comparison
    "enableComparison": true,
    "comparisonTimer": 30,
    //     Temporal
    "enableTemporal": true,
    "temporalTimer": 30,
    //     Syllogism
    "enableSyllogism": true,
    "syllogismTimer": 30,
    //     Direction
    "enableDirection": true,
    "directionTimer": 30,
    //     Direction3D
    "enableDirection3D": false,
    "direction3DTimer": 30,
    //     Direction4D
    "enableDirection4D": false,
    "direction4DTimer": 30,
    //     Analogy
    "enableAnalogy": false,
    "analogyTimer": 30,
    "onlyAnalogy": false,
    //     Binary
    "enableBinary": false,
    "binaryTimer": 30,
    "onlyBinary": false,
    "nestedBinaryDepth": 1,
    "enableAnd": true,
    "enableNand": true,
    "enableOr": true,
    "enableNor": true,
    "enableXor": true,
    "enableXnor": true,
    // Other game mechanics:
    //     Sorting Test
    "enableSortingTest": false,
    "sortingTestTimer": 30,
    "onlySortingTest": false,
    "minCardWidth": 2
};

// The following should be restructured in a more maintainable form
const keySettingMap = {
    "p-1": "enableDistinction",
    "p-2": "enableComparison",
    "p-3": "enableSyllogism",
    "p-4": "enableAnalogy",
    "p-5": "premises",
    "p-6": "enableDirection",
    "p-7": "enableBinary",
    "p-8": "enableMeaningfulWords",
    "p-9": "enableCarouselMode",
    "p-10": "enableTemporal",
    "p-11": "enableNegation",
    "p-12": "enableDirection3D",
    "p-13": "enableDirection4D",
    "p-14": "onlyAnalogy",
    "p-15": "onlyBinary",
    "p-16": "enableMeta",
    "p-17": "nestedBinaryDepth",
    "p-18": "removeNegationExplainer",
    "p-19": "enableSortingTest",
    "p-20": "onlySortingTest",
    "p-21": "minCardWidth",
    "p-22": "enableStroopEffect",
    "p-23": "enableAnd",
    "p-24": "enableNand",
    "p-25": "enableOr",
    "p-26": "enableNor",
    "p-27": "enableXor",
    "p-28": "enableXnor",
    "p-29": "distinctionTimer",
    "p-30": "comparisonTimer",
    "p-31": "temporalTimer",
    "p-32": "syllogismTimer",
    "p-33": "analogyTimer",
    "p-34": "directionTimer",
    "p-35": "direction3DTimer",
    "p-36": "direction4DTimer",
    "p-37": "binaryTimer",
    "p-38": "sortingTestTimer"
};

const strings = [
    "QAW",
    "QAR",
    "QAT",
    "QAP",
    "QAS",
    "QAD",
    "QAF",
    "QAG",
    "QAK",
    "QAL",
    "QAZ",
    "QAX",
    "QAC",
    "QAV",
    "QAB",
    "QAN",
    "QAM",
    "QEW",
    "QER",
    "QET",
    "QEP",
    "QES",
    "QED",
    "QEF",
    "QEG",
    "QEK",
    "QEL",
    "QEZ",
    "QEX",
    "QEC",
    "QEV",
    "QEB",
    "QEN",
    "QEM",
    "QIW",
    "QIR",
    "QIT",
    "QIP",
    "QIS",
    "QID",
    "QIF",
    "QIG",
    "QIK",
    "QIL",
    "QIZ",
    "QIX",
    "QIC",
    "QIV",
    "QIB",
    "QIN",
    "QIM",
    "QOW",
    "QOR",
    "QOT",
    "QOP",
    "QOS",
    "QOD",
    "QOF",
    "QOG",
    "QOK",
    "QOL",
    "QOZ",
    "QOX",
    "QOC",
    "QOV",
    "QOB",
    "QON",
    "QOM",
    "QUW",
    "QUR",
    "QUT",
    "QUP",
    "QUS",
    "QUD",
    "QUF",
    "QUG",
    "QUK",
    "QUL",
    "QUZ",
    "QUX",
    "QUC",
    "QUV",
    "QUB",
    "QUN",
    "QUM",
    "WAQ",
    "WAR",
    "WAT",
    "WAP",
    "WAS",
    "WAD",
    "WAF",
    "WAG",
    "WAK",
    "WAL",
    "WAZ",
    "WAX",
    "WAC",
    "WAV",
    "WAB",
    "WAN",
    "WAM",
    "WEQ",
    "WER",
    "WET",
    "WEP",
    "WES",
    "WED",
    "WEF",
    "WEG",
    "WEK",
    "WEL",
    "WEZ",
    "WEX",
    "WEC",
    "WEV",
    "WEB",
    "WEN",
    "WEM",
    "WIQ",
    "WIR",
    "WIT",
    "WIP",
    "WIS",
    "WID",
    "WIF",
    "WIG",
    "WIK",
    "WIL",
    "WIZ",
    "WIX",
    "WIC",
    "WIV",
    "WIB",
    "WIN",
    "WIM",
    "WOQ",
    "WOR",
    "WOT",
    "WOP",
    "WOS",
    "WOD",
    "WOF",
    "WOG",
    "WOK",
    "WOL",
    "WOZ",
    "WOX",
    "WOC",
    "WOV",
    "WOB",
    "WON",
    "WOM",
    "WUQ",
    "WUR",
    "WUT",
    "WUP",
    "WUS",
    "WUD",
    "WUF",
    "WUG",
    "WUK",
    "WUL",
    "WUZ",
    "WUX",
    "WUC",
    "WUV",
    "WUB",
    "WUN",
    "WUM",
    "RAQ",
    "RAW",
    "RAT",
    "RAP",
    "RAS",
    "RAD",
    "RAF",
    "RAG",
    "RAK",
    "RAL",
    "RAZ",
    "RAX",
    "RAC",
    "RAV",
    "RAB",
    "RAN",
    "RAM",
    "REQ",
    "REW",
    "RET",
    "REP",
    "RES",
    "RED",
    "REF",
    "REG",
    "REK",
    "REL",
    "REZ",
    "REX",
    "REC",
    "REV",
    "REB",
    "REN",
    "REM",
    "RIQ",
    "RIW",
    "RIT",
    "RIP",
    "RIS",
    "RID",
    "RIF",
    "RIG",
    "RIK",
    "RIL",
    "RIZ",
    "RIX",
    "RIC",
    "RIV",
    "RIB",
    "RIN",
    "RIM",
    "ROQ",
    "ROW",
    "ROT",
    "ROP",
    "ROS",
    "ROD",
    "ROF",
    "ROG",
    "ROK",
    "ROL",
    "ROZ",
    "ROX",
    "ROC",
    "ROV",
    "ROB",
    "RON",
    "ROM",
    "RUQ",
    "RUW",
    "RUT",
    "RUP",
    "RUS",
    "RUD",
    "RUF",
    "RUG",
    "RUK",
    "RUL",
    "RUZ",
    "RUX",
    "RUC",
    "RUV",
    "RUB",
    "RUN",
    "RUM",
    "TAQ",
    "TAW",
    "TAR",
    "TAP",
    "TAS",
    "TAD",
    "TAF",
    "TAG",
    "TAK",
    "TAL",
    "TAZ",
    "TAX",
    "TAC",
    "TAV",
    "TAB",
    "TAN",
    "TAM",
    "TEQ",
    "TEW",
    "TER",
    "TEP",
    "TES",
    "TED",
    "TEF",
    "TEG",
    "TEK",
    "TEL",
    "TEZ",
    "TEX",
    "TEC",
    "TEV",
    "TEB",
    "TEN",
    "TEM",
    "TIQ",
    "TIW",
    "TIR",
    "TIP",
    "TIS",
    "TID",
    "TIF",
    "TIG",
    "TIK",
    "TIL",
    "TIZ",
    "TIX",
    "TIC",
    "TIV",
    "TIB",
    "TIN",
    "TIM",
    "TOQ",
    "TOW",
    "TOR",
    "TOP",
    "TOS",
    "TOD",
    "TOF",
    "TOG",
    "TOK",
    "TOL",
    "TOZ",
    "TOX",
    "TOC",
    "TOV",
    "TOB",
    "TON",
    "TOM",
    "TUQ",
    "TUW",
    "TUR",
    "TUP",
    "TUS",
    "TUD",
    "TUF",
    "TUG",
    "TUK",
    "TUL",
    "TUZ",
    "TUX",
    "TUC",
    "TUV",
    "TUB",
    "TUN",
    "TUM",
    "PAQ",
    "PAW",
    "PAR",
    "PAT",
    "PAS",
    "PAD",
    "PAF",
    "PAG",
    "PAK",
    "PAL",
    "PAZ",
    "PAX",
    "PAC",
    "PAV",
    "PAB",
    "PAN",
    "PAM",
    "PEQ",
    "PEW",
    "PER",
    "PET",
    "PES",
    "PED",
    "PEF",
    "PEG",
    "PEK",
    "PEL",
    "PEZ",
    "PEX",
    "PEC",
    "PEV",
    "PEB",
    "PEN",
    "PEM",
    "PIQ",
    "PIW",
    "PIR",
    "PIT",
    "PIS",
    "PID",
    "PIF",
    "PIG",
    "PIK",
    "PIL",
    "PIZ",
    "PIX",
    "PIC",
    "PIV",
    "PIB",
    "PIN",
    "PIM",
    "POQ",
    "POW",
    "POR",
    "POT",
    "POS",
    "POD",
    "POF",
    "POG",
    "POK",
    "POL",
    "POZ",
    "POX",
    "POC",
    "POV",
    "POB",
    "PON",
    "POM",
    "PUQ",
    "PUW",
    "PUR",
    "PUT",
    "PUS",
    "PUD",
    "PUF",
    "PUG",
    "PUK",
    "PUL",
    "PUZ",
    "PUX",
    "PUC",
    "PUV",
    "PUB",
    "PUN",
    "PUM",
    "SAQ",
    "SAW",
    "SAR",
    "SAT",
    "SAP",
    "SAD",
    "SAF",
    "SAG",
    "SAK",
    "SAL",
    "SAZ",
    "SAX",
    "SAC",
    "SAV",
    "SAB",
    "SAN",
    "SAM",
    "SEQ",
    "SEW",
    "SER",
    "SET",
    "SEP",
    "SED",
    "SEF",
    "SEG",
    "SEK",
    "SEL",
    "SEZ",
    "SEX",
    "SEC",
    "SEV",
    "SEB",
    "SEN",
    "SEM",
    "SIQ",
    "SIW",
    "SIR",
    "SIT",
    "SIP",
    "SID",
    "SIF",
    "SIG",
    "SIK",
    "SIL",
    "SIZ",
    "SIX",
    "SIC",
    "SIV",
    "SIB",
    "SIN",
    "SIM",
    "SOQ",
    "SOW",
    "SOR",
    "SOT",
    "SOP",
    "SOD",
    "SOF",
    "SOG",
    "SOK",
    "SOL",
    "SOZ",
    "SOX",
    "SOC",
    "SOV",
    "SOB",
    "SON",
    "SOM",
    "SUQ",
    "SUW",
    "SUR",
    "SUT",
    "SUP",
    "SUD",
    "SUF",
    "SUG",
    "SUK",
    "SUL",
    "SUZ",
    "SUX",
    "SUC",
    "SUV",
    "SUB",
    "SUN",
    "SUM",
    "DAQ",
    "DAW",
    "DAR",
    "DAT",
    "DAP",
    "DAS",
    "DAF",
    "DAG",
    "DAK",
    "DAL",
    "DAZ",
    "DAX",
    "DAC",
    "DAV",
    "DAB",
    "DAN",
    "DAM",
    "DEQ",
    "DEW",
    "DER",
    "DET",
    "DEP",
    "DES",
    "DEF",
    "DEG",
    "DEK",
    "DEL",
    "DEZ",
    "DEX",
    "DEC",
    "DEV",
    "DEB",
    "DEN",
    "DEM",
    "DIQ",
    "DIW",
    "DIR",
    "DIT",
    "DIP",
    "DIS",
    "DIF",
    "DIG",
    "DIK",
    "DIL",
    "DIZ",
    "DIX",
    "DIC",
    "DIV",
    "DIB",
    "DIN",
    "DIM",
    "DOQ",
    "DOW",
    "DOR",
    "DOT",
    "DOP",
    "DOS",
    "DOF",
    "DOG",
    "DOK",
    "DOL",
    "DOZ",
    "DOX",
    "DOC",
    "DOV",
    "DOB",
    "DON",
    "DOM",
    "DUQ",
    "DUW",
    "DUR",
    "DUT",
    "DUP",
    "DUS",
    "DUF",
    "DUG",
    "DUK",
    "DUL",
    "DUZ",
    "DUX",
    "DUC",
    "DUV",
    "DUB",
    "DUN",
    "DUM",
    "FAQ",
    "FAW",
    "FAR",
    "FAT",
    "FAP",
    "FAS",
    "FAD",
    "FAG",
    "FAK",
    "FAL",
    "FAZ",
    "FAX",
    "FAC",
    "FAV",
    "FAB",
    "FAN",
    "FAM",
    "FEQ",
    "FEW",
    "FER",
    "FET",
    "FEP",
    "FES",
    "FED",
    "FEG",
    "FEK",
    "FEL",
    "FEZ",
    "FEX",
    "FEC",
    "FEV",
    "FEB",
    "FEN",
    "FEM",
    "FIQ",
    "FIW",
    "FIR",
    "FIT",
    "FIP",
    "FIS",
    "FID",
    "FIG",
    "FIK",
    "FIL",
    "FIZ",
    "FIX",
    "FIC",
    "FIV",
    "FIB",
    "FIN",
    "FIM",
    "FOQ",
    "FOW",
    "FOR",
    "FOT",
    "FOP",
    "FOS",
    "FOD",
    "FOG",
    "FOK",
    "FOL",
    "FOZ",
    "FOX",
    "FOC",
    "FOV",
    "FOB",
    "FON",
    "FOM",
    "FUQ",
    "FUW",
    "FUR",
    "FUT",
    "FUP",
    "FUS",
    "FUD",
    "FUG",
    "FUK",
    "FUL",
    "FUZ",
    "FUX",
    "FUC",
    "FUV",
    "FUB",
    "FUN",
    "FUM",
    "GAQ",
    "GAW",
    "GAR",
    "GAT",
    "GAP",
    "GAS",
    "GAD",
    "GAF",
    "GAK",
    "GAL",
    "GAZ",
    "GAX",
    "GAC",
    "GAV",
    "GAB",
    "GAN",
    "GAM",
    "GEQ",
    "GEW",
    "GER",
    "GET",
    "GEP",
    "GES",
    "GED",
    "GEF",
    "GEK",
    "GEL",
    "GEZ",
    "GEX",
    "GEC",
    "GEV",
    "GEB",
    "GEN",
    "GEM",
    "GIQ",
    "GIW",
    "GIR",
    "GIT",
    "GIP",
    "GIS",
    "GID",
    "GIF",
    "GIK",
    "GIL",
    "GIZ",
    "GIX",
    "GIC",
    "GIV",
    "GIB",
    "GIN",
    "GIM",
    "GOQ",
    "GOW",
    "GOR",
    "GOT",
    "GOP",
    "GOS",
    "GOD",
    "GOF",
    "GOK",
    "GOL",
    "GOZ",
    "GOX",
    "GOC",
    "GOV",
    "GOB",
    "GON",
    "GOM",
    "GUQ",
    "GUW",
    "GUR",
    "GUT",
    "GUP",
    "GUS",
    "GUD",
    "GUF",
    "GUK",
    "GUL",
    "GUZ",
    "GUX",
    "GUC",
    "GUV",
    "GUB",
    "GUN",
    "GUM",
    "KAQ",
    "KAW",
    "KAR",
    "KAT",
    "KAP",
    "KAS",
    "KAD",
    "KAF",
    "KAG",
    "KAL",
    "KAZ",
    "KAX",
    "KAC",
    "KAV",
    "KAB",
    "KAN",
    "KAM",
    "KEQ",
    "KEW",
    "KER",
    "KET",
    "KEP",
    "KES",
    "KED",
    "KEF",
    "KEG",
    "KEL",
    "KEZ",
    "KEX",
    "KEC",
    "KEV",
    "KEB",
    "KEN",
    "KEM",
    "KIQ",
    "KIW",
    "KIR",
    "KIT",
    "KIP",
    "KIS",
    "KID",
    "KIF",
    "KIG",
    "KIL",
    "KIZ",
    "KIX",
    "KIC",
    "KIV",
    "KIB",
    "KIN",
    "KIM",
    "KOQ",
    "KOW",
    "KOR",
    "KOT",
    "KOP",
    "KOS",
    "KOD",
    "KOF",
    "KOG",
    "KOL",
    "KOZ",
    "KOX",
    "KOC",
    "KOV",
    "KOB",
    "KON",
    "KOM",
    "KUQ",
    "KUW",
    "KUR",
    "KUT",
    "KUP",
    "KUS",
    "KUD",
    "KUF",
    "KUG",
    "KUL",
    "KUZ",
    "KUX",
    "KUC",
    "KUV",
    "KUB",
    "KUN",
    "KUM",
    "LAQ",
    "LAW",
    "LAR",
    "LAT",
    "LAP",
    "LAS",
    "LAD",
    "LAF",
    "LAG",
    "LAK",
    "LAZ",
    "LAX",
    "LAC",
    "LAV",
    "LAB",
    "LAN",
    "LAM",
    "LEQ",
    "LEW",
    "LER",
    "LET",
    "LEP",
    "LES",
    "LED",
    "LEF",
    "LEG",
    "LEK",
    "LEZ",
    "LEX",
    "LEC",
    "LEV",
    "LEB",
    "LEN",
    "LEM",
    "LIQ",
    "LIW",
    "LIR",
    "LIT",
    "LIP",
    "LIS",
    "LID",
    "LIF",
    "LIG",
    "LIK",
    "LIZ",
    "LIX",
    "LIC",
    "LIV",
    "LIB",
    "LIN",
    "LIM",
    "LOQ",
    "LOW",
    "LOR",
    "LOT",
    "LOP",
    "LOS",
    "LOD",
    "LOF",
    "LOG",
    "LOK",
    "LOZ",
    "LOX",
    "LOC",
    "LOV",
    "LOB",
    "LON",
    "LOM",
    "LUQ",
    "LUW",
    "LUR",
    "LUT",
    "LUP",
    "LUS",
    "LUD",
    "LUF",
    "LUG",
    "LUK",
    "LUZ",
    "LUX",
    "LUC",
    "LUV",
    "LUB",
    "LUN",
    "LUM",
    "ZAQ",
    "ZAW",
    "ZAR",
    "ZAT",
    "ZAP",
    "ZAS",
    "ZAD",
    "ZAF",
    "ZAG",
    "ZAK",
    "ZAL",
    "ZAX",
    "ZAC",
    "ZAV",
    "ZAB",
    "ZAN",
    "ZAM",
    "ZEQ",
    "ZEW",
    "ZER",
    "ZET",
    "ZEP",
    "ZES",
    "ZED",
    "ZEF",
    "ZEG",
    "ZEK",
    "ZEL",
    "ZEX",
    "ZEC",
    "ZEV",
    "ZEB",
    "ZEN",
    "ZEM",
    "ZIQ",
    "ZIW",
    "ZIR",
    "ZIT",
    "ZIP",
    "ZIS",
    "ZID",
    "ZIF",
    "ZIG",
    "ZIK",
    "ZIL",
    "ZIX",
    "ZIC",
    "ZIV",
    "ZIB",
    "ZIN",
    "ZIM",
    "ZOQ",
    "ZOW",
    "ZOR",
    "ZOT",
    "ZOP",
    "ZOS",
    "ZOD",
    "ZOF",
    "ZOG",
    "ZOK",
    "ZOL",
    "ZOX",
    "ZOC",
    "ZOV",
    "ZOB",
    "ZON",
    "ZOM",
    "ZUQ",
    "ZUW",
    "ZUR",
    "ZUT",
    "ZUP",
    "ZUS",
    "ZUD",
    "ZUF",
    "ZUG",
    "ZUK",
    "ZUL",
    "ZUX",
    "ZUC",
    "ZUV",
    "ZUB",
    "ZUN",
    "ZUM",
    "XAQ",
    "XAW",
    "XAR",
    "XAT",
    "XAP",
    "XAS",
    "XAD",
    "XAF",
    "XAG",
    "XAK",
    "XAL",
    "XAZ",
    "XAC",
    "XAV",
    "XAB",
    "XAN",
    "XAM",
    "XEQ",
    "XEW",
    "XER",
    "XET",
    "XEP",
    "XES",
    "XED",
    "XEF",
    "XEG",
    "XEK",
    "XEL",
    "XEZ",
    "XEC",
    "XEV",
    "XEB",
    "XEN",
    "XEM",
    "XIQ",
    "XIW",
    "XIR",
    "XIT",
    "XIP",
    "XIS",
    "XID",
    "XIF",
    "XIG",
    "XIK",
    "XIL",
    "XIZ",
    "XIC",
    "XIV",
    "XIB",
    "XIN",
    "XIM",
    "XOQ",
    "XOW",
    "XOR",
    "XOT",
    "XOP",
    "XOS",
    "XOD",
    "XOF",
    "XOG",
    "XOK",
    "XOL",
    "XOZ",
    "XOC",
    "XOV",
    "XOB",
    "XON",
    "XOM",
    "XUQ",
    "XUW",
    "XUR",
    "XUT",
    "XUP",
    "XUS",
    "XUD",
    "XUF",
    "XUG",
    "XUK",
    "XUL",
    "XUZ",
    "XUC",
    "XUV",
    "XUB",
    "XUN",
    "XUM",
    "CAQ",
    "CAW",
    "CAR",
    "CAT",
    "CAP",
    "CAS",
    "CAD",
    "CAF",
    "CAG",
    "CAK",
    "CAL",
    "CAZ",
    "CAX",
    "CAV",
    "CAB",
    "CAN",
    "CAM",
    "CEQ",
    "CEW",
    "CER",
    "CET",
    "CEP",
    "CES",
    "CED",
    "CEF",
    "CEG",
    "CEK",
    "CEL",
    "CEZ",
    "CEX",
    "CEV",
    "CEB",
    "CEN",
    "CEM",
    "CIQ",
    "CIW",
    "CIR",
    "CIT",
    "CIP",
    "CIS",
    "CID",
    "CIF",
    "CIG",
    "CIK",
    "CIL",
    "CIZ",
    "CIX",
    "CIV",
    "CIB",
    "CIN",
    "CIM",
    "COQ",
    "COW",
    "COR",
    "COT",
    "COP",
    "COS",
    "COD",
    "COF",
    "COG",
    "COK",
    "COL",
    "COZ",
    "COX",
    "COV",
    "COB",
    "CON",
    "COM",
    "CUQ",
    "CUW",
    "CUR",
    "CUT",
    "CUP",
    "CUS",
    "CUD",
    "CUF",
    "CUG",
    "CUK",
    "CUL",
    "CUZ",
    "CUX",
    "CUV",
    "CUB",
    "CUN",
    "CUM",
    "VAQ",
    "VAW",
    "VAR",
    "VAT",
    "VAP",
    "VAS",
    "VAD",
    "VAF",
    "VAG",
    "VAK",
    "VAL",
    "VAZ",
    "VAX",
    "VAC",
    "VAB",
    "VAN",
    "VAM",
    "VEQ",
    "VEW",
    "VER",
    "VET",
    "VEP",
    "VES",
    "VED",
    "VEF",
    "VEG",
    "VEK",
    "VEL",
    "VEZ",
    "VEX",
    "VEC",
    "VEB",
    "VEN",
    "VEM",
    "VIQ",
    "VIW",
    "VIR",
    "VIT",
    "VIP",
    "VIS",
    "VID",
    "VIF",
    "VIG",
    "VIK",
    "VIL",
    "VIZ",
    "VIX",
    "VIC",
    "VIB",
    "VIN",
    "VIM",
    "VOQ",
    "VOW",
    "VOR",
    "VOT",
    "VOP",
    "VOS",
    "VOD",
    "VOF",
    "VOG",
    "VOK",
    "VOL",
    "VOZ",
    "VOX",
    "VOC",
    "VOB",
    "VON",
    "VOM",
    "VUQ",
    "VUW",
    "VUR",
    "VUT",
    "VUP",
    "VUS",
    "VUD",
    "VUF",
    "VUG",
    "VUK",
    "VUL",
    "VUZ",
    "VUX",
    "VUC",
    "VUB",
    "VUN",
    "VUM",
    "BAQ",
    "BAW",
    "BAR",
    "BAT",
    "BAP",
    "BAS",
    "BAD",
    "BAF",
    "BAG",
    "BAK",
    "BAL",
    "BAZ",
    "BAX",
    "BAC",
    "BAV",
    "BAN",
    "BAM",
    "BEQ",
    "BEW",
    "BER",
    "BET",
    "BEP",
    "BES",
    "BED",
    "BEF",
    "BEG",
    "BEK",
    "BEL",
    "BEZ",
    "BEX",
    "BEC",
    "BEV",
    "BEN",
    "BEM",
    "BIQ",
    "BIW",
    "BIR",
    "BIT",
    "BIP",
    "BIS",
    "BID",
    "BIF",
    "BIG",
    "BIK",
    "BIL",
    "BIZ",
    "BIX",
    "BIC",
    "BIV",
    "BIN",
    "BIM",
    "BOQ",
    "BOW",
    "BOR",
    "BOT",
    "BOP",
    "BOS",
    "BOD",
    "BOF",
    "BOG",
    "BOK",
    "BOL",
    "BOZ",
    "BOX",
    "BOC",
    "BOV",
    "BON",
    "BOM",
    "BUQ",
    "BUW",
    "BUR",
    "BUT",
    "BUP",
    "BUS",
    "BUD",
    "BUF",
    "BUG",
    "BUK",
    "BUL",
    "BUZ",
    "BUX",
    "BUC",
    "BUV",
    "BUN",
    "BUM",
    "NAQ",
    "NAW",
    "NAR",
    "NAT",
    "NAP",
    "NAS",
    "NAD",
    "NAF",
    "NAG",
    "NAK",
    "NAL",
    "NAZ",
    "NAX",
    "NAC",
    "NAV",
    "NAB",
    "NAM",
    "NEQ",
    "NEW",
    "NER",
    "NET",
    "NEP",
    "NES",
    "NED",
    "NEF",
    "NEG",
    "NEK",
    "NEL",
    "NEZ",
    "NEX",
    "NEC",
    "NEV",
    "NEB",
    "NEM",
    "NIQ",
    "NIW",
    "NIR",
    "NIT",
    "NIP",
    "NIS",
    "NID",
    "NIF",
    "NIG",
    "NIK",
    "NIL",
    "NIZ",
    "NIX",
    "NIC",
    "NIV",
    "NIB",
    "NIM",
    "NOQ",
    "NOW",
    "NOR",
    "NOT",
    "NOP",
    "NOS",
    "NOD",
    "NOF",
    "NOG",
    "NOK",
    "NOL",
    "NOZ",
    "NOX",
    "NOC",
    "NOV",
    "NOB",
    "NOM",
    "NUQ",
    "NUW",
    "NUR",
    "NUT",
    "NUP",
    "NUS",
    "NUD",
    "NUF",
    "NUG",
    "NUK",
    "NUL",
    "NUZ",
    "NUX",
    "NUC",
    "NUV",
    "NUB",
    "NUM",
    "MAQ",
    "MAW",
    "MAR",
    "MAT",
    "MAP",
    "MAS",
    "MAD",
    "MAF",
    "MAG",
    "MAK",
    "MAL",
    "MAZ",
    "MAX",
    "MAC",
    "MAV",
    "MAB",
    "MAN",
    "MEQ",
    "MEW",
    "MER",
    "MET",
    "MEP",
    "MES",
    "MED",
    "MEF",
    "MEG",
    "MEK",
    "MEL",
    "MEZ",
    "MEX",
    "MEC",
    "MEV",
    "MEB",
    "MEN",
    "MIQ",
    "MIW",
    "MIR",
    "MIT",
    "MIP",
    "MIS",
    "MID",
    "MIF",
    "MIG",
    "MIK",
    "MIL",
    "MIZ",
    "MIX",
    "MIC",
    "MIV",
    "MIB",
    "MIN",
    "MOQ",
    "MOW",
    "MOR",
    "MOT",
    "MOP",
    "MOS",
    "MOD",
    "MOF",
    "MOG",
    "MOK",
    "MOL",
    "MOZ",
    "MOX",
    "MOC",
    "MOV",
    "MOB",
    "MON",
    "MUQ",
    "MUW",
    "MUR",
    "MUT",
    "MUP",
    "MUS",
    "MUD",
    "MUF",
    "MUG",
    "MUK",
    "MUL",
    "MUZ",
    "MUX",
    "MUC",
    "MUV",
    "MUB",
    "MUN"
];

const nouns = [
    "Локоть",
    "Муравей",
    "Рога",
    "Квартира",
    "Яблоко",
    "Абрикос",
    "Архитектор",
    "Кресло",
    "Стрела",
    "Тетя",
     "Малыш",
     "Назад",
     "задний двор",
     "Сумка",
     "Пекарня",
     "Мяч",
     "Воздушный шар",
     "Банк",
     "Бар",
     "Барби",
     "Корзина",
     "Летучая мышь",
     "Бобы",
     "Медведь",
     "Кровать",
     "Колокольчик",
     "Пояс",
     "Бермуды",
     "Велосипед",
     "Мотоцикл",
     "Бикини",
     "Счет",
     "Птица",
     "Печенье",
     "черный",
     "Лезвие",
     "Блейзер",
     "Блендер",
     "Доска",
     "Лодка",
     "Кости",
     "Книга",
     "Книжный шкаф",
     "Книжный магазин",
     "Сапоги",
     "Поклон",
     "Коробка",
     "Боксер",
     "Мальчик",
     "Мозг",
     "Латунь",
     "Хлеб",
     "Мост",
     "Брат",
     "Щетка",
     "Ведро",
     "Пряжки",
     "Буффало",
     "Лампочка",
     "Автобус",
     "Масло",
     "Кнопки",
     "Кабина",
     "Кабинет",
     "Кабель",
     "Кафе",
     "Камера",
     "Конфеты",
     "Тростник",
     "Каноэ",
     "Колпачок",
     "Машина",
     "Такси",
     "Кардиган",
     "Ковровая дорожка",
     "Касса",
     "Казино",
     "Замок",
     "Кошка",
     "Пещера",
     "Виолончель",
     "Цемент",
     "Стул",
     "щечки",
     "Сыр",
     "Грудь",
     "Курица",
     "Дети",
     "Чипсы",
     "Шоколад",
     "чокер",
     "Церковь",
     "Кино",
     "Город",
     "Клип",
     "Часы",
     "Одежда",
     "Облако",
     "Кокос",
     "Кофе",
     "Монета",
     "Цвет",
     "Компьютер",
     "Плита",
     "Посуда",
     "Кукуруза",
     "Костюм",
     "Диван",
     "Страна",
     "Корова",
     "Галстук",
     "Креденца",
     "Детская кроватка",
     "Ворона",
     "Чашка",
     "Огурец",
     "Буфет",
     "Валюта",
     "Цилиндр",
     "Даты",
     "Дочь",
     "Олень",
     "Дантист",
     "Дизайнер",
     "Рабочий стол",
     "Рабочий стол",
     "Детектив",
     "Врач",
     "Собака",
     "Дельфин",
     "Осел",
     "Одеваться",
     "Комод",
     "Напиток",
     "Барабан",
     "Пыль",
     "Орел",
     "Серьги",
     "Уши",
     "Земля",
     "Яйцо",
     "Слон",
     "Ластик",
     "Имущество",
     "Глаза",
     "Фабрика",
     "Вентилятор",
     "Ферма",
     "Отец",
     "Фильм",
     "Палец",
     "Огонь",
     "Рыбы",
     "Флаг",
     "Цветок",
     "Еда",
     "Нога",
     "Лес",
     "Вилка",
     "Лиса",
     "Морозилка",
     "Холодильник",
     "Лягушка",
     "Фрукты",
     "Гаджеты",
     "Галактика",
     "Гараж",
     "Сад",
     "Чеснок",
     "Газ",
     "Гель",
     "Подарок",
     "Имбирь",
     "Жирафа",
     "Девочка",
     "Стекло",
     "Перчатки",
     "Козел",
     "Губернатор",
     "Зерна",
     "Виноград",
     "Гость",
     "Гитара",
     "Волосы",
     "Гамбургер",
     "Молоток",
     "Рука",
     "Шляпа",
     "Голова",
     "Сердце",
     "Каблуки",
     "Травы",
     "Хоккей",
     "Рог",
     "Лошадь",
     "Больница",
     "Хозяин",
     "Хостел",
     "Отель",
     "Дом",
     "Лед",
     "Мороженое",
     "Железо",
     "Куртка",
     "Челюсть",
     "Ювелирные украшения",
     "Судить",
     "Кувшин",
     "Соковыжималка",
     "Джемпер",
     "Кенгуру",
     "Ключ",
     "Клавиатура",
     "Ребенок",
     "Набор",
     "Летающий змей",
     "Нож",
     "Коала",
     "Ягненок",
     "Фонарь",
     "Ноутбук",
     "Адвокат",
     "Кожа",
     "Листья",
     "Нога",
     "Леггинсы",
     "Лимон",
     "Библиотека",
     "Поднимать",
     "Свет",
     "Легче",
     "Лев",
     "Губы",
     "Замок",
     "Лондон",
     "Багаж",
     "Легкое",
     "Торговый центр",
     "Мужчина",
     "Манго",
     "Рынок",
     "Марс",
     "Лекарственное средство",
     "Молоко",
     "Зеркало",
     "Мобильный",
     "Модель",
     "Монитор",
     "Обезьяна",
     "Луна",
     "Свет луны",
     "Мать",
     "Мотор",
     "Гора",
     "Мышь",
     "Рот",
     "Музей",
     "Музыка",
     "Музыкант",
     "Шея",
     "Ожерелье",
     "Газета",
     "Шум",
     "Лапша",
     "Нос",
     "Ноутбук",
     "Медсестра",
     "Океан",
     "Масло",
     "Лук",
     "Апельсин",
     "Страус",
     "Духовой шкаф",
     "Сова",
     "Подушка",
     "Пагода",
     "Покрасить",
     "Художник",
     "Ладонь",
     "Блин",
     "Панда",
     "Пантера",
     "Штаны",
     "Бумага",
     "Парфюмер",
     "Парк",
     "Попугай",
     "Макаронные изделия",
     "Павлин",
     "Арахис",
     "Ручка",
     "Карандаш",
     "Духи",
     "Аптека",
     "Телефон",
     "Врач",
     "Фортепиано",
     "Свинья",
     "Голубь",
     "Трубка",
     "Пицца",
     "Самолет",
     "Планета",
     "Растение",
     "Пластика",
     "Тарелки",
     "Полиция",
     "Попкорн",
     "Картофель",
     "Мешочек",
     "Профессор",
     "Тыква",
     "Пирамида",
     "Кролик",
     "Радио",
     "Радуга",
     "Бритва",
     "Дистанционный пульт",
     "Ребра",
     "Рис",
     "Звенеть",
     "Река",
     "Дорога",
     "Веревка",
     "Резина",
     "Поваренная соль",
     "Песок",
     "Сандалии",
     "Сэндвич",
     "Пила",
     "Саксофон",
     "Шкала",
     "Школа",
     "Ножницы",
     "Море",
     "Сенатор",
    "Шампунь",
     "Акула",
     "Овца",
     "Корабль",
     "Рубашка",
     "Обувь",
     "Магазин",
     "Шорты",
     "Плечо",
     "Душ",
     "Креветка",
     "Певица",
     "Раковина",
     "Сестра",
     "Юбка",
     "Небо",
     "Тапки",
     "Улыбка",
     "Дым",
     "Снеговик",
     "Мыло",
     "Носки",
     "Диван",
     "Земля",
     "Сын",
     "Суп",
     "Спагетти",
     "Воробей",
     "Паук",
     "Ложка",
     "Стадион",
     "Лестница",
     "Звезда",
     "Станция",
     "Корень",
     "Желудок",
     "Печь",
     "Улица",
     "Сахар",
     "Подходить",
     "Чемодан",
     "Солнце",
     "Хирург",
     "Лебедь",
     "Свитер",
     "Сладкий",
     "Стол",
     "Планшет",
     "Хвост",
     "Нажмите",
     "Такси",
     "Чай",
     "Учитель",
     "Подросток",
     "Зубы",
     "Телефон",
     "Храм",
     "Большой теннис",
     "Театр",
     "Нить",
     "Галстук",
     "Тигр",
     "Салфетка",
     "Пальцы ног",
     "Помидор",
     "Язык",
     "Инструменты",
     "Полотенце",
     "Город",
     "Игрушка",
     "Тренироваться",
     "Дерево",
     "Штаны",
     "Грузовая машина",
     "Туннель",
     "Турция",
     "Черепаха",
     "Зонтик",
     "Дядя",
     "Нижнее белье",
     "Ван",
     "Ваза",
     "Овощ",
     "Транспортное средство",
     "Жилет",
     "Вилла",
     "Деревня",
     "Скрипка",
     "Голос",
     "Талия",
     "Официант",
     "Стена",
     "Бумажник",
     "Смотреть",
     "Вода",
     "Кит",
     "Пшеница",
     "Виски",
     "Окно",
     "Крылья",
     "Зима",
     "Проволока",
     "Волк",
     "Женщина",
     "Древесина",
     "Рана",
     "Запястье",
     "Ксилофон",
     "Зебра",
     "Зоопарк"
];

const validRules = [
    "0001",
    "1011",
    "0221",
    "1231",
    "0021",
    "1031",
    "0112",
    "1012",
    "1232",
    "0332",
    "0132",
    "1032",
    "0223",
    "2023",
    "3033",
    "1233",
    "0023",
    "1033",
    "0114",
    "2024",
    "1234",
    "0134",
    "1034",
    "0024"
];

// This seems such a stupid idea but it opens the possibility of variants
const forms = [
    [
        'Все <span class="subject">$</span> являются <span class="subject">$</span>',
        'Ни один <span class="subject">$</span> не является <span class="subject">$</span>',
        'Некоторые <span class="subject">$</span> являются <span class="subject">$</span>',
        'Некоторые <span class="subject">$</span> не являются <span class="subject">$</span>'
    ],
    [
        '<span class="is-negated">Ни один</span> <span class="subject">$</span> не является <span class="subject">$</span>',
        '<span class="is-negated">Все</span> <span class="subject">$</span> являются <span class="subject">$</span>',
        'Некоторые <span class="subject">$</span> <span class="is-negated">не являются</span> <span class="subject">$</span>',
        'Некоторые <span class="subject">$</span> <span class="is-negated">являются</span> <span class="subject">$</span>'
    ],
];

const dirNames = [
    null,
    "Север",
    "Север-Восток",
    "Восток",
    "Юг-Восток",
    "Юг",
    "Юг-Запад",
    "Запад",
    "Север-Запад"
];

const nameInverseDir = {
    "Север": "Юг",
    "Север-Восток": "Юг-Запад",
    "Восток": "Запад",
    "Юг-Восток": "Север-Запад",
    "Юг": "Север",
    "Юг-Запад": "Север-Восток",
    "Запад": "Восток",
    "Север-Запад": "Юг-Восток"
};

const dirCoords = [
    [ 0,  0],
    [ 0, -1],
    [ 1, -1],
    [ 1,  0],
    [ 1,  1],
    [ 0,  1],
    [-1,  1],
    [-1,  0],
    [-1, -1]
];

const dirString = (x, y, z) => {
    let str = '';
    if (z === 1) str = 'Над';
    if (z === -1) str = 'Под';
    if (z && (x || y)) str += ' и ';
    if (y === 1) str += 'Север';
    if (y === -1) str += 'Юг';
    if (y && x) str += '-';
    if (x === 1) str += 'Восток';
    if (x === -1) str += 'Запад';
    return str;
}

const dirCoords3D = [];
const dirNames3D = [];
const nameInverseDir3D = {};

const xs = Array(3).fill(0).map((_, i) => i-1)
xs.map(x =>
    xs.map(y =>
        xs.map(z => {
            if (x === 0 && y === 0 && z === 0) return;
            dirCoords3D.push([ x, y, z ]);
            dirNames3D.push(dirString(x, y, z));
            nameInverseDir3D[dirString(x, y, z)] = dirString(-x, -y, -z);
        })
    )
);

const timeNames = ['было', 'есть', 'будет'];

const paradoxes = [
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "The sentence that follows is true",
            "The sentence before is false"
        ],
        conclusion: "Is the former sentence true?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "Nothing is better than eternal bliss",
            "And a slice of bread is better than nothing"
        ],
        conclusion: "So is a slice of bread better than eternal bliss?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "Nobody goes to that restaurant",
            "It is too crowded"
        ],
        conclusion: "So did anyone go to that restaurant?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "Don't go near the water",
            "Until you learned how to swim"
        ],
        conclusion: "Can you?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "The man who wrote such a stupid question can not write at all"
        ],
        conclusion: "Could he?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "There's a bullet which can shoot through any barrier",
            "There's also an absolutely bullet-proof armor which no object can penetrate"
        ],
        conclusion: "Can such a bullet penetrate such an armor?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "A man drown in the fountain of eternal life"
        ],
        conclusion: "Could he?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "Your mission is not to accept the mission"
        ],
        conclusion: "Do you accept?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "A girl goes into the past and kills her Grandma",
            "Since her Grandma is dead, the girl was never born"
        ],
        conclusion: "If she was never born, then could she kill her grandma?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "The temperature this morning is 0 degrees",
            "And the weather channel says that it will be twice as cold tomorrow"
        ],
        conclusion: "Will it be colder?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "Answer truthfully to the following question:"
        ],
        conclusion: "Will the next button you press be 'false'?"
    },
    {
        category: "Paradox",
        isValid: "undeterminate",
        premises: [
            "If the God Almighty creates a stone, which he is not capable of lifting"
        ],
        conclusion: "Will he be able to lift it?"
    }
];

const logicPuzzles = [
    {
        category: "Logic",
        isValid: false,
        premises: [
            "There are three fellows",
            "You ask the to first: Are you a Swindlecant?",
            "The answer is not comprehensible",
            "So you ask to the second: What did the first fellow say?",
            "The second fellow says: my other fellow said that he is a Swindlecant",
            "And to that the last fellow says: Do not believe him, he is lying!",
            "Honestants always speak the truth",
            "Swindlecants always lie"
        ],
        conclusion: "Is the second fellow a Honestant?"
    },
    {
        category: "Logic",
        isValid: true,
        premises: [
            "Honestants always speak the truth",
            "Swindlecants always lie",
            "There are two fellows",
            "A fellow says: I'm a Swindlecant or the other one is an Honestant",
        ],
        conclusion: "Is he an Honestant?"
    },
    {
        category: "Logic",
        isValid: true,
        premises: [
            "You are condemned to death",
            "But there's a chance to save yourself",
            "There are 2 doors, one is death and the other is freedom",
            "These doors are guarded by 2 guards",
            "And only them know which door leads to freedom",
            "You can ask one question to one guard",
            "And you know that one guard always lie"
        ],
        conclusion: "Is there a question that can save you? (if so which one?)"
    },
    {
        category: "Logic",
        isValid: false,
        premises: [
            "There are two fellows",
            "A fellow says: We are all Swindlecants",
            "Another fellow concludes: Just one of us is an Honestant",
            "Honestants always speak the truth",
            "Swindlecants always lie"
        ],
        conclusion: "Is the one who has not spoken an Honestant?"
    },
    {
        category: "Logic",
        isValid: true,
        premises: [
            "Honestants always speak the truth",
            "Swindlecants always lie",
            "A guys says: If my wife is an Honestant, then I am a Swindlecant"
        ],
        conclusion: "Is the guy an Honestant? (what about the wife?)"
    },
    {
        category: "Logic",
        isValid: true,
        premises: [
            "You heard about a buried treasure",
            "So you ask another man and he says:",
            "On this island there is a treasure only if I'm an Honestant",
            "Honestants always speak the truth",
            "Swindlecants always lie"
        ],
        conclusion: "Should you go and find the treasure?"
    },
    {
        category: "Logic",
        isValid: true,
        premises: [
            "Honestants always speak the truth",
            "Swindlecants always lie",
            "You forgot what day is",
            "So you ask 4 aborigines:",
            "A: Yesterday was Wednesday",
            "B: Tomorrow will be Sunday",
            "C: Today is Friday",
            "D: The day before yesterday was Thursday"
        ],
        conclusion: "Is D telling the truth? (what day is?)"
    },
    {
        category: "Logic",
        isValid: false,
        premises: [
            "Two people want to talk with you",
            "And you ask: Is at lВосток one of you an Honestant?",
            "After the answers there was no doubt",
            "Honestants always speak the truth",
            "Swindlecants always lie"
        ],
        conclusion: "Are they both liers? (who are they?)"
    },
    {
        category: "Logic",
        isValid: true,
        premises: [
            "Honestants always speak the truth",
            "Swindlecants always lie",
            "There was a girl that everybody wanted to marry",
            "But she only want to marry a rich Swindlecant"
        ],
        conclusion: "Is there a sentence that would convince her? (if so which one?)"
    },
    {
        category: "Logic",
        isValid: false,
        premises: [
            "A man accused of a crime hired an attorney",
            "Statements from that attorney are always true",
            "The following exchange took place",
            "Prosecutor: If the accused commited the crime, then he had an accomplice",
            "Defender: That's not true!"
        ],
        conclusion: "Did the attorney help his client?"
    },
    {
        category: "Logic",
        isValid: true,
        premises: [
            "You live on an island where there are only two kinds of people",
            "The ones who always tell the truth",
            "Adn those who always lie",
            "You are accused of a crime and brought before the court",
            "You are allowed to speak only one sentence in your defense",
            "If you were a liar, and you were innocent",
            "And it is a fact that a liar commited the crime",
        ],
        conclusion: "Is there anything you can say to save yourself?"
    },
    {
        category: "Logic",
        isValid: false,
        premises: [
            "You live on an island where there are only two kinds of people",
            "The ones who always tell the truth",
            "Adn those who always lie",
            "You are accused of a crime and brought before the court",
            "You are allowed to speak only one sentence in your defense",
            "If you committed the crime"
        ],
        conclusion: "Is there anything you can say to save yourself?"
    }
];
