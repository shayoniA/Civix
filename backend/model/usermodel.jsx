const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pg = require('pg');
const jwt = require('jsonwebtoken');
require('dotenv').config();
