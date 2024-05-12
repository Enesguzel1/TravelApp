namespace TravelAppAPI.Entities
{
    public class Word
    {
        public int WordID { get; set; }
        public string Vocable { get; set; }
        public string Meaning{ get; set; }
        public string Example{ get; set; }
        public int CityID{ get; set; }
        public City City{ get; set; }
    }
}
