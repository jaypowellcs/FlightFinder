using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Server.Models
{


    public class AirlineContext : DbContext

    {
        
        public DbSet<Airport> Airports { get; set; }
        public DbSet<Flight> Flights { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<User> Users { get; set; }
        public AirlineContext(DbContextOptions options) : base(options)
        {

        }
    }
}