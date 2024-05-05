using TravelAppAPI.Entities;

namespace TravelAppAPI.Repositories.UserRepository
{
    public interface IUserRepository
    {
		Task<List<User>> GetUsers();
		public void CreateUser(User user);


	}
}
