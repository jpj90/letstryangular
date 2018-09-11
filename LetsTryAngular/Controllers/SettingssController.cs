using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LetsTryAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingssController : ControllerBase
    {
        private static string[] Users = new[]
        {
            "Bob", "Franka", "Lisa", "Berny", "Louis"
        };

        [HttpGet("[action]")]
        public IEnumerable<Setting> Settings()
        {
            List<Setting> returnval = new List<Setting>();
            foreach(var i in Users)
            {
                returnval.Add(new Setting
                {
                    User = i,
                    FilterOn = new string[] { "Date", "OrderId", "Price" },
                    GroupingColumns = new string[] { "ItemCategory" },
                    OrderByColumns = new string[] { "Date" }
                });
            }
            return returnval;
        }

        public class Setting
        {
            public string User { get; set; }
            public string[] FilterOn { get; set; }
            public string[] GroupingColumns { get; set; }
            public string[] OrderByColumns { get; set; } 
        }
    }


}