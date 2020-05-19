using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using productAPI.models;

namespace productAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class productController : ControllerBase
    {

        private readonly ILogger<productController> _logger;

        public productController(ILogger<productController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return new List<Product>
            {
            new Product {
                Id=1,
                Name = "eggs"

                },
                new Product {
                Id=2,
                Name = "balls"

                },
                new Product {
                Id=3,
                Name = "My balls"

                },
                new Product {
                Id=4,
                Name = "My Super balls"
                }
            };
        }
    }
}