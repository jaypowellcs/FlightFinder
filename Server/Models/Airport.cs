﻿namespace Server.Models
{
    public class Airport
    {
        public int AirportId { get; set; }
        public required string AirportName { get; set; }
        public required string City { get; set; }
        public required string Country { get; set; }
        public string? Code { get; set; }
    }
}