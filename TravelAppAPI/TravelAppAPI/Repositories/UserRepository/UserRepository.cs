using Dapper;
using TravelAppAPI.Entities;
using TravelAppAPI.Models.TravelApp;

namespace TravelAppAPI.Repositories.UserRepository
{
    public class UserRepository : IUserRepository
	{
		private readonly Context _context;

		public UserRepository(Context context)
		{
			_context = context;
		}
		public async Task<List<User>> GetUsers()
		{
			string query = "Select * From Users";
			using (var connection = _context.CreateConnection())
			{
				var values = await connection.QueryAsync<User>(query);
				return values.ToList();
			}
		}

		public async void CreateUser(User user)
		{
			string query = "insert into Users (Username,Password) values (@userName,@password)";
			var parameters = new DynamicParameters();
			parameters.Add("@userName", user.Username );
			parameters.Add("@password", user.Password);

			using (var connection = _context.CreateConnection())
			{
				await connection.ExecuteAsync(query, parameters);
			}
		}

	}
}
