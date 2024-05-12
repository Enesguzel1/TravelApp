using TravelAppAPI.Entities;

namespace TravelAppAPI.Repositories.CityRepository
{
    public interface ICityRepository
    {
        public Task<List<City>> GetAllCity();
    }
}
