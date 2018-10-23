const base_url = "http://localhost/leboncoin_api/web/app_dev.php/";
const API_URL = {
    REGISTER: base_url+"inscription",
    CONNEXION: base_url+"connexion",
    ANNONCE: base_url+"annonce",
    CATEGORIE: base_url+"categorie",
    TYPEANNONCE: base_url+"typeAnnonce",

    //type categorie
    VEHICULE: base_url+"vehicule",
    MODEBEAUTE: base_url+"modeBeaute",
    MAISON: base_url+"maison",
    TRAVAILEMPLOI: base_url+"travailEmploi",
    AGRICULTURE: base_url+"agriculture",
    MULTIMEDIA: base_url+"multimedia",
    IMMOBILIER: base_url+"immobilier",
    MATERIELDIVERS: base_url+"materielDivers",

    //Offres
    OFFRE: base_url+"offre",
    OFFREPRO: base_url+"offrePro",
    OFFREPART: base_url+"offrePart",
    DERNIEREOFFRE: base_url+"derniereOffre",

    //Demandes
    DEMANDE: base_url+"demande",
    DEMANDEPART: base_url+"demandePart",
    DEMANDEPRO: base_url+"demandePro",
    DERNIEREDEMANDE: base_url+"derniereDemande"
}
export default API_URL