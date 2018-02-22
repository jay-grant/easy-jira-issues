using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace easy_jira_issues.server.Controllers
{
    public class FormFile
    {
        string ContentType { get; }
        string ContentDisposition { get; }
        long Length { get; }
        string Name { get; }
        string FileName { get; }
    }

    public class YeetCommand {
        public string Yeet { get; set; }
        public string Skrt { get; set; }
        public string God { get; set; }
    }

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]YeetCommand value)
        {
            var aaaa = value;
            Console.WriteLine("Receiving package on Values Controller Post");
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
