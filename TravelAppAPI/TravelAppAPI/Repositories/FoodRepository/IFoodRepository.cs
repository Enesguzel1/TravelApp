using TravelAppAPI.Entities;

namespace TravelAppAPI.Repositories.FoodRepository
{
    public interface IFoodRepository
    {
        Task<List<Food>> GetFoodByCity(int id);
    }
}
