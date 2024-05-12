using TravelAppAPI.Entities;

namespace TravelAppAPI.Repositories.PlacesRepository
{
    public interface IPlaceRepository
    {
        Task<List<PlaceToVisit>> GetPlaceToVisitByID(int id);
    }
}
